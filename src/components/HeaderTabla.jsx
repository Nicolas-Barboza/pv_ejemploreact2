function HeaderTabla({ columnas }) {
    const style = {
        backgroundColor: "black",
        color: "white",
        fontSize: "20px"
    }
  return (
    <thead>
        <tr style={style}>
            {
                columnas.map(texto=><th>{texto}</th>)
            }
        </tr>
    </thead>

  )
}
export default HeaderTabla;