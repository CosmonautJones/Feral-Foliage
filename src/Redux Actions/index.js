export const ADD_USER = 'ADD_USER';
export const PASSWORD_RECOVERY = 'PASSWORD_RECOVERY';


export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

export const passwordRecovery = (password) => {
    return {
      type: PASSWORD_RECOVERY,
      payload: password
    }
}