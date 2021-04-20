console.clear();
// People dropp

const createPolicy = (name, amount) =>{
  return {
    type : 'CREATE_POLICY',
    payload : {
      name : name,
      amount : amount
    }
  }
}

const deletePolicy = (name) =>{
  return {
    type : 'DELETE_POLICY',
    payload : {
      name : name
    }
  }
}

const createClaim = (name, amountOfMoneyToCollect) =>{
  return {
    type : 'CREATE_CLAIM',
    payload : {
      name: name,
      amountOfMoenyToCollection : amountOfMoneyToCollect
    }
  }
}


// reducers
const claimsHistory = (oldListOfClaims = [], action) =>{
  if(action.type === 'CREATE_CLAIM'){
    //we care about this action
    return [...oldListOfClaims, action.payload];
  }
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action)=>{
  if(action.type === 'CREATE_CLAIM'){
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  }else if(action.type === 'CREATE_POLICY'){
    return bagOfMoney + action.payload.amount;
  }else{
    return bagOfMoney;
  }
};

const policies = (listOfPolicies = [], action) =>{
  if(action.type === 'CREATE_POLICY'){
    return [...listOfPolicies, action.payload.name];
  }else if(action.type === 'DELETE_POLICY'){
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  return listOfPolicies;
};

const {createStore, combineReducers} = Redux;

const ourDepartments = combineReducers({
  accounting : accounting,
  claimsHistory: claimsHistory,
  policies : policies
});

const store = createStore(ourDepartments);


store.dispatch(createPolicy('Aditya', 20));
store.dispatch(createPolicy('Rahmat', 40));
store.dispatch(createPolicy('Fano', 10));
store.dispatch(createClaim('Aditya', 10));
store.dispatch(deletePolicy('Aditya'));
console.log(store.getState());