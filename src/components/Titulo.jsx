function Titulo({ texto }) {
    const style = {
        fontFamily: "Arial",
        fontSize: "14px",
        margin: "2px",
    };
    return (
        <h3 style={style}>{texto}</h3>
    );
}
export default Titulo;