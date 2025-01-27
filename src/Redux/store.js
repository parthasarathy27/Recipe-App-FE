import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // Correct import for named export
import { RecipeReducer } from "./RecipeReducer";

const store = createStore(RecipeReducer, applyMiddleware(thunk));
export { store };
