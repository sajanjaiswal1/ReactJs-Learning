const initial_data = { count: 999 };


const counterReducer = (state = initial_data, action) => {

    switch(action.type){
        case "INCREASE":
            return {count: ++state.count}
            case "DECREASE":
            return {count: --state.count}
            case "RESET":
            return {count: 0}
    }
  return state;
};

export default counterReducer;
