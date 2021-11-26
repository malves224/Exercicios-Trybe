const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };

  const customerInfo = (order) => {
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const dadosPessoa = `${order.name}, Telefone: ${order.phoneNumber}, ${Object.values(order.address)}`
    return `Olá ${deliveryPerson}, Entrega para: ${dadosPessoa}`;
  }
  
  console.log(customerInfo(order));
  
  const orderModifier = (order) => {
    const personName = order.name;
    const pizzaOrder = Object.keys(order.order.pizza);
    const drinkOrder = order.order.drinks.coke.type;
    const priceOrder = order.payment.total;
    return `Olá ${personName}, o total do seu pedido de ${pizzaOrder} e ${drinkOrder} é R$${priceOrder},00`
  }
  
 
  console.log(orderModifier(order));