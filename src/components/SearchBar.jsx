// src/components/SearchBar.jsx
import SearchIcon from "./SearchIcon";
import Styles from "./SearchBar.module.css"; // Asegúrate que la importación es correcta

function SearchBar({ terminoBusqueda, onTerminoBusquedaChange, onBuscar }) {
    return (
        <div className={Styles.searchContainer}> {/* Esta clase SÍ se aplica según tu imagen */}
            <input
                type="text"
                placeholder="Buscar por descripción o ID"
                value={terminoBusqueda}
                onChange={(e) => onTerminoBusquedaChange(e.target.value)}
                className={Styles.searchInput} 
            />
            <button
                type="button"
                className={Styles.searchIconButton}
                onClick={onBuscar}
                aria-label="Buscar"
            >
                <SearchIcon />
            </button>
        </div>
    );
}

export default SearchBar;