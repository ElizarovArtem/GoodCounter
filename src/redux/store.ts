import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";


const rootReducers = combineReducers({
    counter: counterReducer
})

export type RootStateType = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers)

export const selectRootState = (state: RootStateType) => state.counter;