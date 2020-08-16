import {combineReducers} from "redux";
import {reducer as FormReducer, } from 'redux-form'
import {SearchWordReducer} from "./searchWordReducer"
import {Word} from "../actions";

export interface StoreState {
    Word: Word | string,
    form: any,
}

export default combineReducers<StoreState>({
    Word: SearchWordReducer,
    form: FormReducer,
});
