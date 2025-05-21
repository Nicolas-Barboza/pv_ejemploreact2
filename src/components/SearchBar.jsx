import { useState, useMemo, useEffect } from "react";
import styles from "./SearchBar.module.css";
import SearchIcon from "./SearchIcon";

function SearchBar({ productos, onFiltrar }) {
  const [termino, setTermino] = useState("");

  const productosFiltradosLocalmente = useMemo(() => {
    const terminoLower = termino.toLowerCase().trim();
    if (!terminoLower) {
      return productos;
    }
    return productos.filter(
      (producto) =>
        producto.descripcion.toLowerCase().includes(terminoLower) ||
        producto.id.toString() === terminoLower
    );
  }, [productos, termino]);

  const handleChange = (e) => {
    setTermino(e.target.value);
  };

  useEffect(() => {
    if (onFiltrar) {
      onFiltrar(productosFiltradosLocalmente);
    }
  }, [productosFiltradosLocalmente, onFiltrar]);

  return (
    <div className={styles["search-container"]}>
      <label htmlFor="buscar"></label>
      <input
        id="buscar"
        type="text"
        value={termino}
        onChange={handleChange}
        placeholder="Buscar producto (ID o descripción)"
        className={styles["search-input"]}
      />
      <div className={styles["static-search-icon"]} aria-hidden="true">
        <SearchIcon />
      </div>
    </div>
  );
}

export default SearchBar;