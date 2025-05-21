import Logo from "./Logo";
import SearchIcon from "./SearchIcon";
import Styles from "./NavBar.module.css";

function NavBar(props) {
    const [terminoBusqueda, setTerminoBusqueda] = props.terminoBusquedaProp;
    const [modo, setModo] = props.modo;

    const handleGoHome = () => {
        setModo("list");
        setTerminoBusqueda(""); // Limpiar búsqueda al ir a inicio
    };

    const handleAddNew = () => {
        setModo("new");
    };

    const handleSearchIconClick = () => {
        if (terminoBusqueda.trim() !== "") { // Solo busca si hay texto
            props.handleClickBuscar(); 
        } else {
            // Opcional: si el input está vacío y se hace clic, volver a la lista completa
            setModo("list");
        }
    };

    return (
        <nav className={Styles.navBar}>
            <div className={Styles.navSection}>
                <div className={Styles.logoContainer}>
                    <Logo></Logo>
                </div>
                <h1 className={Styles.pageTitle}>Gestor de Productos</h1>
            </div>
            <div className={Styles.navSection}>
                <div className={Styles.navActions}>
                    <a href="#" onClick={handleGoHome}>Inicio</a>
                    <a href="#" onClick={handleAddNew} className={Styles.addProducoButton}> Agregar Producto</a>
                </div>
                <div className={Styles.searchContainer}>
                    <input type="text" placeholder="Buscar por descripción o ID" value={terminoBusqueda} onChange={(e) => setTerminoBusqueda(e.target.value)}></input>
                    <button type="button" className={Styles.searchIconButton} onClick={handleSearchIconClick} aria-label="Buscar"><SearchIcon /></button>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;