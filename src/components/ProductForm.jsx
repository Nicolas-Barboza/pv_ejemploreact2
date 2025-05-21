// src/components/ProductForm.jsx
import Titulo from "./Titulo"; // Reutilizamos el componente Titulo

function ProductForm({ productoActual, setProductoActual, onGuardar, modo }) {

    // Manejador para cambios en los inputs del formulario
    const handleChange = (e) => {
        const { name, value, type } = e.target;
        // Convertir a número si el tipo es number, sino dejar como texto
        const val = type === 'number' ? parseFloat(value) || 0 : value;
        setProductoActual({
            ...productoActual,
            [name]: val,
        });
    };

    // Manejador para el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías agregar validaciones antes de guardar
        if (!productoActual.descripcion.trim()) {
            alert("La descripción no puede estar vacía.");
            return;
        }
        if (productoActual.precioUnitario <= 0) {
            alert("El precio unitario debe ser mayor que cero.");
            return;
        }
        if (productoActual.stock < 0) {
            alert("El stock no puede ser negativo.");
            return;
        }
        if (productoActual.descuento < 0 || productoActual.descuento > 100) {
            alert("El descuento debe estar entre 0 y 100.");
            return;
        }
        onGuardar(productoActual);
    };

    // El título del formulario cambia según el modo (nuevo o editar)
    const tituloForm = modo === "edit" ? "Editar Producto" : "Registrar Nuevo Producto";

    // El precio con descuento se calcula y se muestra.
    // Ya tenemos un useEffect en App.jsx que lo calcula y actualiza en productoActual.
    // Aquí solo lo mostramos.
    const precioConDescuentoMostrado = productoActual.precioConDescuento !== undefined 
        ? productoActual.precioConDescuento.toFixed(2) 
        : (productoActual.precioUnitario * (1 - (productoActual.descuento || 0) / 100)).toFixed(2);


    return (
        <div>
            <Titulo texto={tituloForm} />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="descripcion">Descripción:</label>
                    <input
                        type="text"
                        id="descripcion"
                        name="descripcion"
                        value={productoActual.descripcion || ""}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="precioUnitario">Precio Unitario:</label>
                    <input
                        type="number"
                        id="precioUnitario"
                        name="precioUnitario"
                        value={productoActual.precioUnitario || 0}
                        onChange={handleChange}
                        step="0.01" // Permite decimales para el precio
                        min="0"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="descuento">Descuento (%):</label>
                    <input
                        type="number"
                        id="descuento"
                        name="descuento"
                        value={productoActual.descuento || 0}
                        onChange={handleChange}
                        min="0"
                        max="100"
                    />
                </div>
                <div>
                    <label htmlFor="precioConDescuento">Precio con Descuento:</label>
                    {/* Mostramos el precio con descuento, no es editable directamente */}
                    <input
                        type="text"
                        id="precioConDescuento"
                        name="precioConDescuento"
                        value={`$${precioConDescuentoMostrado}`}
                        readOnly
                        style={{ backgroundColor: "#e9e9e9" }} // Estilo para indicar que es de solo lectura
                    />
                </div>
                <div>
                    <label htmlFor="stock">Stock:</label>
                    <input
                        type="number"
                        id="stock"
                        name="stock"
                        value={productoActual.stock || 0}
                        onChange={handleChange}
                        min="0"
                        required
                    />
                </div>
                <br />
                <button type="submit">Guardar Producto</button>
            </form>
        </div>
    );
}

export default ProductForm;