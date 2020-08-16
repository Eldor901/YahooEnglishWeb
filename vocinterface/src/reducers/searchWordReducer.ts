import {Action, ActionTypes, Word,} from "../actions";

export  const SearchWordReducer = (state: Word | string = "" , action: Action) =>{
  switch (action.type) {
      case ActionTypes.searchWord:
          return action.payload;
      default:
          return state;
  }
};
