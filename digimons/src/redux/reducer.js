import { combineReducers } from "redux";
import { DigimonsReducer } from "./DigimonStore";

const rootReducer = combineReducers({
  digimons: DigimonsReducer,
});

export default rootReducer;
