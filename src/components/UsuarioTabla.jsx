function UsuarioTabla({ usuarios,handleClickEdit }) {

    return (
        <div>
            <h3>Lista de Usuarios</h3>
            <table border="1" style={{borderCollapse:"collapse"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Login</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => 
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.login}</td>
                            <td><a href="#" onClick={() => alert(usuario.id)}>Eliminar</a></td>
                            <td><a href="#" onClick={() => handleClickEdit(usuario)}>Editar</a></td>
                        </tr>
                    
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default UsuarioTabla;