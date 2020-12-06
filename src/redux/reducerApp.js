import {SET_DB} from './types';

const initialState = {
  selectedDb: 'chinook',
};

export const reducerApp = (state = initialState, action) => {
  switch (action.type) {
    case SET_DB:
      return {
        ...state,
        selectedDb: action.payload,
      };
    default:
      return state;
  }
};
