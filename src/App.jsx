// src/App.jsx
import { useEffect, useState, useCallback, useMemo } from 'react'; // Agregamos useCallback y useMemo
// import UsuarioForm from './components/UsuarioForm'; // Renombrar a ProductForm
// import UsuarioTabla from './components/UsuarioTabla'; // Renombrar a ProductList/ProductItem
import NavBar from './components/NavBar';
import ProductForm from './components/ProductForm'; // Nuevo componente (a crear)
import ProductList from './components/ProductList'; // Nuevo componente (a crear)

let nextId = 0; // Para generar IDs de productos

function App() {
  // Estado para la lista de productos. Iniciamos con un array vacío o datos de ejemplo.
  const [productos, setProductos] = useState([
    { id: nextId++, descripcion: "Monitor LED 24 pulgadas", precioUnitario: 150, descuento: 5, stock: 20 },
    { id: nextId++, descripcion: "Teclado Mecánico RGB", precioUnitario: 75, descuento: 10, stock: 35 },
    { id: nextId++, descripcion: "Mouse Gamer Pro", precioUnitario: 40, descuento: 0, stock: 50 },
  ]);

  // Estado para el producto que se está editando o creando
  const [productoActual, setProductoActual] = useState({
    id: null,
    descripcion: "",
    precioUnitario: 0,
    descuento: 0,
    stock: 0,
    precioConDescuento: 0
  });

  // Estado para el término de búsqueda
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  // Estado para el modo de la aplicación (list, search, new, edit)
  const [modo, setModo] = useState("list"); // Inicia en modo lista

  // useEffect para recalcular precioConDescuento si cambian los datos relevantes en productoActual
  useEffect(() => {
    if (modo === "new" || modo === "edit") {
      const precio = parseFloat(productoActual.precioUnitario) || 0;
      const desc = parseFloat(productoActual.descuento) || 0;
      const precioConDesc = precio * (1 - desc / 100);
      // Es buena práctica redondear a 2 decimales para precios
      setProductoActual(p => ({ ...p, precioConDescuento: parseFloat(precioConDesc.toFixed(2)) }));
    }
  }, [productoActual.precioUnitario, productoActual.descuento, modo]);


  // useEffect para mostrar cambios en el array de productos (como pide el TP)
  useEffect(() => {
    console.log("Lista de productos actualizada:", productos);
  }, [productos]);

  // Lógica para agregar o actualizar un producto
  const handleGuardarProducto = useCallback((productoAGuardar) => {
    if (modo === "edit") {
      setProductos(prevProductos =>
        prevProductos.map(p => (p.id === productoAGuardar.id ? productoAGuardar : p))
      );
    } else { // modo "new"
      setProductos(prevProductos => [
        ...prevProductos,
        { ...productoAGuardar, id: nextId++ } // Asigna un nuevo ID
      ]);
    }
    setModo("list"); // Vuelve a la lista después de guardar
    setProductoActual({ id: null, descripcion: "", precioUnitario: 0, descuento: 0, stock: 0, precioConDescuento: 0 }); // Resetea el formulario
  }, [modo]); // Dependencia: modo

  // Lógica para cuando se hace clic en "Editar" en un item de la lista
  const handleClickEditar = useCallback((productoParaEditar) => {
    setProductoActual(productoParaEditar);
    setModo("edit");
  }, []); // Sin dependencias, la función no cambia

  // Lógica para eliminar un producto
  const handleClickEliminar = useCallback((idProductoAEliminar) => {
    setProductos(prevProductos =>
      prevProductos.filter(p => p.id !== idProductoAEliminar)
    );
    // Si estabas editando el producto que se eliminó, vuelve a la lista
    if (modo === "edit" && productoActual.id === idProductoAEliminar) {
      setModo("list");
      setProductoActual({ id: null, descripcion: "", precioUnitario: 0, descuento: 0, stock: 0, precioConDescuento: 0 });
    }
  }, [modo, productoActual.id]);


  // Filtrado de productos usando useMemo (como pide el TP)
  const productosFiltrados = useMemo(() => {
    // Esta función SÍ debe ejecutarse cada vez que terminoBusqueda cambia,
    // porque pre-calcula los resultados. PERO solo se mostrarán
    // cuando el modo sea "search".
    if (!terminoBusqueda) return productos; // Devuelve todos si no hay término
    const busquedaLower = terminoBusqueda.toLowerCase();
    return productos.filter(producto =>
      producto.descripcion.toLowerCase().includes(busquedaLower) ||
      producto.id.toString().includes(busquedaLower)
    );
  }, [productos, terminoBusqueda]);

  // Función para el botón de búsqueda del NavBar
  const handleBuscarClick = useCallback(() => {
    if (terminoBusqueda.trim() !== "") {
        setModo("search"); // Cambia a modo búsqueda
    } else {
        setModo("list"); // Si el input está vacío, muestra la lista completa
    }
  }, [terminoBusqueda]); // Depende de terminoBusqueda para decidir qué hacer


  // Renderizado condicional basado en el modo
  const renderContent = () => {
    switch (modo) {
      case "list":
        return <ProductList
          productos={productos}
          onEditar={handleClickEditar}
          onEliminar={handleClickEliminar}
        />;
      case "search":
        return <ProductList
          productos={productosFiltrados} // Muestra los filtrados
          onEditar={handleClickEditar}
          onEliminar={handleClickEliminar}
        />;
      case "new":
      case "edit":
        return <ProductForm
          productoActual={productoActual}
          setProductoActual={setProductoActual}
          onGuardar={handleGuardarProducto}
          modo={modo}
        />;
      default:
        return <ProductList
          productos={productos}
          onEditar={handleClickEditar}
          onEliminar={handleClickEliminar}
        />;
    }
  };

  return (
    <>
      <div>
        <NavBar
          // Pasamos el estado y el setter para terminoBusqueda
          terminoBusquedaProp={[terminoBusqueda, setTerminoBusqueda]}
          modo={[modo, setModo]}
          handleClickBuscar={handleBuscarClick} // Pasamos la nueva función de búsqueda
        />
        <div  style={{ paddingTop: "60px", padding: "20px" }}> {/* Añade un poco de padding al contenido */}
          {renderContent()}
        </div>
      </div>
    </>
  );
}

export default App;