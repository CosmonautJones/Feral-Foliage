import { GET_TARGET_PLANT } from '../actions/actions';

export const targetPlantReducer = (targetPlant = null, action) => {
    console.log('Target fired');
    switch (action.type) {
        case GET_TARGET_PLANT:
          return action.payload.data;
        default:
          return targetPlant;
    }
};