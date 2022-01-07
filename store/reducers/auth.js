import { AUTHENTICATE, LOGOUT } from '../actions/auth';

const initialState = {
    accessToken: null,
    id: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                token: action.accessToken,
                userId: action.id
            };

        case LOGOUT:
            return initialState;
        // case SIGNUP:
        //     return {
        //         token: action.token,
        //         userId: action.userId
        //     };
        default:
            return state;
    }
};
