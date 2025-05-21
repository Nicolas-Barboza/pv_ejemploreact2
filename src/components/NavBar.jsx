// src/components/NavBar.jsx
import Logo from "./Logo";
import SearchBar from "./SearchBar"; // Importamos el nuevo componente
import Styles from "./NavBar.module.css";


function NavBar(props) {
    // Extraemos terminoBusqueda y setTerminoBusqueda de la prop terminoBusquedaProp
    const [terminoBusqueda, setTerminoBusqueda] = props.terminoBusquedaProp;
    // Extraemos setModo de la prop modo para manejar la navegación
    // La prop original era modo={[modo, setModo]}, así que el segundo elemento es setModo
    const setModo = props.modo[1];


    const handleGoHome = () => {
        setModo("list"); // Cambia el modo a 'list'
        setTerminoBusqueda(""); // Limpia el término de búsqueda al ir a inicio
    };

    const handleAddNew = () => {
        setModo("new"); // Cambia el modo a 'new' para mostrar el formulario de nuevo producto
    };

    // Esta función se pasará a SearchBar para manejar el cambio en el input
    const handleSearchInputChange = (nuevoTermino) => {
        setTerminoBusqueda(nuevoTermino);
    };

    // Esta función se pasará a SearchBar para manejar el clic en el botón de búsqueda
    // y simplemente llamará a la función handleClickBuscar que viene de App.jsx
    const handleTriggerSearch = () => { // o el nombre que le hayas dado al handler del onClick del botón
        props.handleClickBuscar(); // Llama directamente a la función de App.jsx
    };
    return (
        <nav className={Styles.navBar}>
            <div className={Styles.navSection}>
                <div className={Styles.logoContainer}>
                    <Logo /> {/* No necesita .children, es un componente auto-cerrado */}
                </div>
                <h1 className={Styles.pageTitle}>Gestor de Productos</h1>
            </div>
            <div className={Styles.navSection}>
                <div className={Styles.navActions}>
                    <a href="#" onClick={handleGoHome}>Inicio</a>
                    <a href="#" onClick={handleAddNew} className={Styles.addProducoButton}> Agregar Producto</a>
                </div>
                {/* Usamos el nuevo componente SearchBar aquí */}
                <SearchBar
                    terminoBusqueda={terminoBusqueda}
                    onTerminoBusquedaChange={handleSearchInputChange}
                    onBuscar={handleTriggerSearch}
                />
            </div>
        </nav>
    );
}

export default NavBar;