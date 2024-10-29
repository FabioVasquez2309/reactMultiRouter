import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import Context from "../contexto/Context";


const Login = () => {
  const {logearse, setReferencia}=useContext(Context)
  const navegacion=useNavigate();
  const login=()=>{
    logearse('jab');
    navegacion("/", {replace:true})
  }

  const registro=(e)=> {
    setReferencia(e.currentTarget.value)
  }
  return (
    <>
      <section className="login">
        <h1>Vive el Pais:</h1>
        <label htmlFor="referencia">Referencia:</label>
        <input id="referencia" onChange={registro} placeholder="referencia de tu billete" autoFocus autoComplete="off" />
        <button className="botonRegistro" onClick={login}>Login</button>
      </section>
    </>
  )
}

export default Login
