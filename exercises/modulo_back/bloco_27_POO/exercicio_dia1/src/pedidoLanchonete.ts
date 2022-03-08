class Client {
  private _name: string = String();

  constructor(name: string) {
    this.name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._name = value;
  }
}


class OrderItem {
  private _name: string = String();
  private _price: number = Number();

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value < 0) throw new Error('O preço deve ser positivo.');

    this._price = value;
  }
}

enum PaymentMethod {
  DINHEIRO = 'dinheiro',
  CARTAO = 'cartão',
  VALE = 'vale'
}

class Order {
  private _client: Client;
  private _items: OrderItem[] = [];
  private _paymentMethod: PaymentMethod;
  private _discount: number = 0;

  constructor(client: Client, items: OrderItem[], paymentMethod: PaymentMethod, discount: number) {
    this._client = client;
    this.items = items;
    this._paymentMethod = paymentMethod;
    this.discount = discount;
  }

  get client(): Client {
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get items(): OrderItem[] {
    return this._items;
  }

  set items(value: OrderItem[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo menos um item.');
    }

    this._items = value;
  }

  get paymentMethod(): PaymentMethod {
    return this._paymentMethod;
  }

  set paymentMethod(value: PaymentMethod) {
    this._paymentMethod = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0) {
      throw new Error('O disconto não pode ser um valor negatívo.');
    }

    this._discount = value;
  }

  calculateTotal(): number {
    return this.items.
      reduce((previousValue, item) => {
        const total = previousValue += item.price;

        return total;
      }, 0)
  }

  calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - this.discount);
  }

}

class OrderRepository {
  private _orders: Order[] = [];
  constructor(orders: Order[]) {
    this._orders = orders;
  }

  get orders(): Order[] {
    return this._orders;
  }

  addOrder(order: Order) {
    this._orders.push(order);
  }

}


// Para testar!

const client = new Client('João');

const sandwiche = new OrderItem('Sandwiche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxí', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwiche, juice, dessert], PaymentMethod.DINHEIRO, 0.10);

console.log(order);
console.log('Valor normal: ', order.calculateTotal());
console.log('Valor com desconto: ', order.calculateTotalWithDiscount());