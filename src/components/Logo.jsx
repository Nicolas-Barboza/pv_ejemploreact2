import logoImage from '../assets/img/logo.png';

function Logo(){
    return(
        <div style={{ marginTop: "10px" }}>
            <img src={logoImage} alt="Logo" height={"60px"} width={"60px"}></img>
        </div>
    )
}
export default Logo;