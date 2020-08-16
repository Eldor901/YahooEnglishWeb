import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./index";

export interface Word {
  id: string
  word: string;
  wordPage: JSON
}

export interface SearchWord {
  type: ActionTypes.searchWord;
  payload: Word | string | any;
}

export const searchWord = (word: string) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.post<Word>(
      "http://localhost:5000/dictionary",
      {
        findWord: word,
        headers: {
              'Access-Control-Allow-Origin': 'http://localhost:3000',
        },
      }
    );

    dispatch<SearchWord>({
      type: ActionTypes.searchWord,
      payload: response.data,
    });
  };
};
