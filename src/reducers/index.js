import { combineReducers } from 'redux';
import { plantsReducer } from './PlantsReducer';
import { targetPlantReducer } from './TargetPlantReducer';

const rootReducer = combineReducers({
    plants: plantsReducer,
    targetPlant: targetPlantReducer,
   
});

export default rootReducer