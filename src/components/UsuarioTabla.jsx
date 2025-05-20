import Titulo from "./Titulo";
import HeaderTabla from "./HeaderTabla";

const style = {
    fontFamily:"Arial",
    fontSize:"15px"    
}

function UsuarioTabla({ usuarios, handleClickEdit}) {
    const columnas = ["ID", "Login", "", ""];
    return (
        <div>
            <Titulo texto={"Lista de Usuarios"}></Titulo>
            <table border="1" style={{borderCollapse:"collapse"}}>
                <HeaderTabla columnas={columnas}></HeaderTabla>                
                <tbody>
                    {usuarios.map((usuario) => 
                        <tr style={style} key={usuario.id}>
                            <td style={{paddingLeft: "5px", paddingRight:"5px"}}>{usuario.id}</td>
                            <td style={{paddingLeft: "5px", paddingRight:"5px"}}>{usuario.login}</td>
                            <td style={{paddingLeft: "5px", paddingRight:"5px"}}><a href="#" onClick={() => alert(usuario.id)}>Eliminar</a></td>
                            <td style={{paddingLeft: "5px", paddingRight:"5px"}}><a href="#" onClick={() => handleClickEdit(usuario)}>Editar</a></td>
                        </tr>                    
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default UsuarioTabla;