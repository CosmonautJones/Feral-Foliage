import React from 'react';

import {
    ADD_USER,
    PASSWORD_RECOVERY
} from '../Redux Actions';

export default (user = {}, action) => {
    switch (action.type) {
        case ADD_USER:
          return user
        default:
          return user;

    }
};