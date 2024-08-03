import { Store } from "@mui/icons-material";
import { useSelector } from "react-redux";

const initial_data = {
    game:"Football",
    player:"Messi"
};


const gameReducer = (state = initial_data, action) => {

    switch(action.type){
        case "Update_game":
        return {...state ,game: action.payload}


        case "Update_player":
            return {...state, player: action.payload}
    }
  return state;
};

export default gameReducer;