import { useState } from "react";
import Titulo from "./Titulo";

function UsuarioForm({usuario, handleSubmit}){
    const[usuarioEdit, setUsuarioEdit] = usuario;
    return (
        <div>
            <Titulo texto={"Registro Usuario"}></Titulo>
            <form  action="" onSubmit={handleSubmit}>
                <label>Login:</label>
                <input id="login" type="text" value={usuarioEdit.login} onChange={(e) => setUsuarioEdit({...usuarioEdit, login:e.target.value})}></input>
                <br></br>
                <label>Password:</label>
                <input id="password" type="password" value={usuarioEdit.password} onChange={(e) => setUsuarioEdit({...usuarioEdit, password:e.target.value})}></input>
                <br></br>
                <button>Guardar</button>
            </form>
        </div>
    )
}
export default UsuarioForm