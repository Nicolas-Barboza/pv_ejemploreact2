// src/components/HeaderTabla.jsx
function HeaderTabla({ columnas }) {
    const style = {
        fontFamily: "Arial", // Puedes ajustar estos estilos
        backgroundColor: "lightgrey", // Un color un poco más neutro
        color: "black",
        padding: "8px",
        textAlign: "left"
    };
  return (
    <thead>
        <tr style={{ borderBottom: "2px solid black" }}> {/* Línea separadora */}
            {
                columnas.map((texto, index) => <th key={index} style={style}>{texto}</th>)
            }
        </tr>
    </thead>
  );
}
export default HeaderTabla;