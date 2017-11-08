import axios from 'axios';

export const GET_PLANTS = 'GET_PLANTS';
export const GET_TARGET_PLANT = 'GET_TARGET_PLANT';

export const grabPlants = () => {
    const garden = 'http://localhost:5000/plants';
    const getPlantsPromise = axios.get(garden);
    console.log('grab plants action creator fired...');
    return {
        type: GET_PLANTS,
        payload: getPlantsPromise,
    };
};

export const grabPlantDetails = (id) => {
    const garden = `http://localhost:5000/plants/${id}`;
    const getPlantDetailsPromise = axios.get(garden);

    console.log('grab plant details action creator fired...', id);
    return {
        type: GET_TARGET_PLANT,
        payload: getPlantDetailsPromise,
    };
};