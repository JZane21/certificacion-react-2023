import logo from "../../images/logo.svg"
import '../App.css'

export const PrincipalLogo = () => {
  return (
    <div className="nav-header">
        <img src={logo} className="nav-logo" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
        <i className="fas fa-bars"></i>
        </button>
    </div>  
  );
};
