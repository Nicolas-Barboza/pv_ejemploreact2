function HeaderTabla({ columnas }) {
    const style = {
        fontFamily: "Arial",
        backgroundColor: "yellow",
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