import { Navigate, useNavigate, useParams } from "react-router-dom"
import data from "../datos/data";
import types from "../contexto/types";
import { useContext } from "react";
import Context from "../contexto/Context";

const Comprar = () => {
    const {nombre}=useParams();
    const destinoEncontrado=data.find(dato=>dato.nombre===nombre)

    const navegacion=useNavigate();
    const volver = () => {
        navegacion(-1)
    }
    
    const {dispatch2,contratacion,setSumaTotal,sumaTotal}=useContext(Context);
    const encontrado = contratacion.find(objeto => objeto.sitio==nombre);

    const contratar=()=>{
      setSumaTotal(sumaTotal+destinoEncontrado.precio)
      const action={
        type:types.contratar,
        payload:{nombre:nombre,precio:destinoEncontrado.precio}
      }
      dispatch2(action)
    }

    const anular=()=>{
      setSumaTotal(sumaTotal-destinoEncontrado.precio)
      const action={
        type:types.anular,
        payload:{nombre:nombre}
      }
      dispatch2(action)
    }

    const imagen=`/images/${destinoEncontrado.imagen}`
    
    if (!destinoEncontrado) {
      return<Navigate to="/no"/>
  }
  return (
    <>
      <h1>{nombre}</h1>
      <div className="servicios">{destinoEncontrado.servicio}</div>
      <div className="imagenGrande">
        <div className="precio">{destinoEncontrado.precio}$</div>
        <img src={imagen} alt="" />
        <button className="volver" onClick={volver}>Volver</button>
        {(!encontrado) && <button className="boton contratar" onClick={contratar}>Contratar</button>}
        {(encontrado) && <button className="boton anular" onClick={anular}>Anular</button>}
      </div>
    </>
  )

}

export default Comprar
