import { ADD_USER } from '../Redux Actions';

function usersReducer(state = [], action) {
    switch (action.type) {
        case ADD_USER:
          return action.payload.data;
        default:
          return state;
    }
}

export default usersReducer;