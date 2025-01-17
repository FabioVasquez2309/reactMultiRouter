import types from "./types";

const miReducer2 = (state=[], action) => {
    switch (action.type) {
        case types.contratar:
            return [
                ...state,{sitio:action.payload.nombre,precio:action.payload.precio}
            ]
            break;
        case types.anular:
            return (
                state.filter(cosa=>cosa.sitio!==action.payload.nombre)
            )
            break;
        default:
            return state;
    }
}

export default miReducer2