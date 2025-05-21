// src/components/NavBar.jsx
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Styles from "./NavBar.module.css";

function NavBar({ modo, productos, onProductosFiltradosApp, onIrInicio, onIrAgregar }) {

    const handleGoHome = () => {
        if(onIrInicio) onIrInicio();
    };

    const handleAddNew = () => {
        if(onIrAgregar) onIrAgregar();
    };

    return (
        <nav className={Styles.navBar}>
            <div className={Styles.navSection}>
                <div className={Styles.logoContainer}>
                    <Logo />
                </div>
                <h1 className={Styles.pageTitle}>Gestor de Productos</h1>
            </div>
            <div className={Styles.navSection}> {/* Esta es la sección derecha */}
                <div className={Styles.navActions}>
                    <a href="#" onClick={handleGoHome}>Inicio</a>
                    <a href="#" onClick={handleAddNew} className={Styles.addProducoButton}>Agregar Producto</a>
                </div>
                {/* SearchBar se renderiza aquí */}
                {(modo !== "new" && modo !== "edit") && (
                    <SearchBar
                        productos={productos}
                        onFiltrar={onProductosFiltradosApp}
                    />
                )}
            </div>
        </nav>
    );
}

export default NavBar;