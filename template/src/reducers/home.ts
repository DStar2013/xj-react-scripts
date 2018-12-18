import { handleActions } from 'redux-actions';
// import produce from 'immer';
import update from 'immutability-helper';
import { ADD_TODO_THINGS_EXECUTE } from 'constants/actionTypes/home';

interface IHomeStateDef {
  thingsList: any
}

const initHomeState: IHomeStateDef = {
  thingsList: []
};

export const HomeReducer = handleActions(
  {
    // [ADD_TODO_THINGS_EXECUTE]: produce(
    //   (draft: any, action: any) => {
    //     console.log(action);
    //     return draft = action.payload;
    //   }
    // )
    [ADD_TODO_THINGS_EXECUTE]: (state, { payload }) => {
      console.log(payload);
      return update(state, {
        thingsList: { $push: [payload] }
      });
    }
  },
  initHomeState
);