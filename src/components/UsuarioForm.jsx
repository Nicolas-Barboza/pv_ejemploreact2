import { useState } from "react";
import Titulo from "./Titulo";

function UsuarioForm({usuario,handleSumbit}){
    const [usuarioEdit, setUsuarioEdit] = usuario;
    return (
        <div>
            <Titulo texto="Formulario de Usuario" />
            {/* Corrected: Use the handleSumbit prop received */}
            <form action="" onSubmit={handleSumbit}>
                <label>Login:</label>
                <input id="login" type="text" value={usuarioEdit.login} onChange={(e) => setUsuarioEdit({...usuarioEdit, login: e.target.value})}></input>
                <br></br>
                <label>Password:</label>
                <input id="password" type="password" value={usuarioEdit.password} onChange={(e) => setUsuarioEdit({...usuarioEdit, password: e.target.value})}></input>
                <br></br>
                <button type="submit">Guardar</button> {/* Added type="submit" for clarity */}
            </form>
        </div>
    )
}
export default UsuarioForm;

