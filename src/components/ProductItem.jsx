// src/components/ProductItem.jsx

function ProductItem({ producto, onEditar, onEliminar }) {
    const itemStyle = {
        fontFamily: "Arial, sans-serif",
        fontSize: "14px",
        borderBottom: "1px solid #eee", // Línea separadora suave entre items
    };

    const cellStyle = {
        padding: "8px 5px",
        textAlign: "left",
    };

    const actionLinkStyle = {
        color: "#007bff",
        textDecoration: "none",
        cursor: "pointer",
        marginRight: "10px",
    };

    // Calcula el precio con descuento para mostrarlo, asegurando que los valores sean numéricos
    const precioUnitario = parseFloat(producto.precioUnitario) || 0;
    const precioConDescuentoCalculado = precioUnitario * (1 - (parseFloat(producto.descuento) || 0) / 100);

    return (
        <tr style={itemStyle}>
            <td style={cellStyle}>{producto.id}</td>
            <td style={cellStyle}>{producto.descripcion}</td>
            <td style={{ ...cellStyle, textAlign: "right" }}>${precioUnitario.toFixed(2)}</td>
            <td style={{ ...cellStyle, textAlign: "center" }}>{producto.descuento}%</td>
            <td style={{ ...cellStyle, textAlign: "right" }}>${precioConDescuentoCalculado.toFixed(2)}</td>
            <td style={{ ...cellStyle, textAlign: "center" }}>{producto.stock}</td>
            <td style={cellStyle}>
                <a href="#" style={actionLinkStyle} onClick={() => onEditar(producto)}>
                    Editar
                </a>
                <a href="#" style={{ ...actionLinkStyle, color: "#dc3545" }} onClick={() => onEliminar(producto.id)}>
                    Eliminar
                </a>
            </td>
        </tr>
    );
}

export default ProductItem;