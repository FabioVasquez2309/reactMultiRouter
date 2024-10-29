import types from "./types";

const miReducer = (state, action) => {
    switch (action.type) {
        case types.login:
            return {
                logeado:true,
                usuario: action.payload
            }
            break;
        case types.logout:
            return {
                logeado: false,
                usuario: null    
            }
            break;
    
        default:
            return state;
    }
}

export default miReducer
