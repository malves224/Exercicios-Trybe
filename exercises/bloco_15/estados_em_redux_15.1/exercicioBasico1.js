import Redux from "redux"; 

const fazerLogin = (email) => ({ // isso sera uma action que sera passado como parametro em dispatch
  type: "LOGIN",
  email
});

const ESTADO_INICIAL = {
  login: false,
  email: '',
}

const reducer = (state = ESTADO_INICIAL, action) => { // forma que o reducer ira maniplar os dados e alterar o estado
  switch (action.type) { 
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
      default: // no switch, sempre precisamos ter um caso default!
      return state;
  }
} // essa função tem que ser chama no momento que cria o store

const store = Redux.createStore(reducer); // criando o store

store.dispatch(fazerLogin("alguem@email.com"));// passa uma action a função dispatch

console.log(store.getState());