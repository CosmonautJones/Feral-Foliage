import { GET_PLANTS } from '../actions/actions';

export const plantsReducer = (plants = [], action) => {
    console.log('plantReducer fired');
    switch (action.type) {
        case GET_PLANTS:
          return action.payload.data;
        default:
          return plants;
    }
}