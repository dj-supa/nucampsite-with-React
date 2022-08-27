import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectALLCampsites = () => {
    return CAMPSITES;
};

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// }

export const selectCampsiteById= (Id) => {
    return CAMPSITES.find((campsite) => campsite.id ===Id);
};