// src/components/HeaderTabla.jsx
function HeaderTabla({ columnas }) {
    const style = {
        fontFamily: "Arial",
        backgroundColor: "lightgrey", 
        color: "black",
        padding: "8px",
        textAlign: "left"
    };
  return (
    <thead>
        <tr style={{ borderBottom: "2px solid black" }}> 
            {
                columnas.map((texto, index) => <th key={index} style={style}>{texto}</th>)
            }
        </tr>
    </thead>
  );
}
export default HeaderTabla;