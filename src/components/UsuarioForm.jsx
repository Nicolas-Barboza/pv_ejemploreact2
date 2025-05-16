import { useState } from "react";

function UsuarioForm(usuario,handleSumbit){
    const [usuarioEdit, setUsuarioEdit] = usuario;
    return (
        <div>
            <h5>Usuario</h5>
            <form  action="" onSubmit={handleSumbit}>
                <label>Login:</label>
                <input id="login" type="text" value={usuarioEdit.login} onChange={(e) => setUsuarioEdit({...usuarioEdit, login: e.target.value})}></input>
                <br></br>
                <label>Password:</label>
                <input id="password" type="password" value={usuarioEdit.password} onChange={(e) => setUsuarioEdit({...usuarioEdit, password: e.target.value})}></input>
                <br></br>
                <button>Guardar</button>
            </form>
        </div>
    )
}
export default UsuarioForm;

