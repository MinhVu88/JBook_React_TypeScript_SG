import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { ActionType } from "./actionTypesEnum";

export const store = createStore(reducers, {}, applyMiddleware(thunk));

// manually test redux store (vid 198)
store.dispatch({
	type: ActionType.INSERT_CELL_AFTER,
	payload: {
		id: null,
		type: "code"
	}
});

store.dispatch({
	type: ActionType.INSERT_CELL_AFTER,
	payload: {
		id: null,
		type: "text"
	}
});

console.log('\nstore.ts | store.getState() ->',store.getState());
