import { useState } from 'react'
import NavBar from './components/NavBar';
import UsuarioForm from './components/usuarioForm';
import UsuarioTabla from './components/usuarioTabla';

let nextid = 0;

function App() {
  const [usuarios, setUsuarios] = useState([{ id: 100, login: "Carlos", password: "12321" }, { id: 101, login: "Marina", password: "12321" }, { id: 102, login: "Mario", password: "12321" }]);
  const [usuario, setUsuario] = useState("");
  const [filtrados, setFiltrados] = useState([]);
  const [login, setLogin] = useState("");
  const [modo, setModo] = useState("list");

  const handleClickBuscar = () => {
    setFiltrados(usuarios.filter(usuario => usuario.login === login))
    setModo("search");
  }
      
    const handleSumbit = (e) => {
        e.preventDefault();
        const usuario = { ...usuario, id: nextid++ };
        //Aqui se debe validar los inputs
        setUsuarios([...usuarios, usuario]);
        setModo("list");
        setUsuario("");//para que en la proxima alta este vacio
    }

  return (
    <>
      <div>
        <NavBar login={[login, setLogin]} modo={[modo, setModo]} handleClickBuscar={handleClickBuscar} ></NavBar>
        {(()=>{
          switch (modo) {
            case "list": return <UsuarioTabla usuarios={usuarios}></UsuarioTabla>
            case "search": return <UsuarioTabla usuarios={filtrados}></UsuarioTabla>
            case "new": return <UsuarioForm usuarios={[usuario, setUsuario]} handleSumbit={handleSumbit}></UsuarioForm>

          }
        })()}
      </div>
    </>
  )
}

export default App