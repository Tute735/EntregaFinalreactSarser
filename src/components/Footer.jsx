import { Link } from "react-router-dom";
import "../css/footer.css";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="textPag">
            Bienvenidos a ZneakerZ, tu destino para zapatillas de estilo HYPE.
            Descubre una colección exclusiva de ediciones limitadas y
            colaboraciones de renombre.
          </div>
        </div>

        <div className="col">
          <div className="title">Contacto</div>

          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              {" "}
              Calle Ficticia 123, Barrio Imaginario, Buenos Aires, Argentina
            </div>
          </div>

          <div className="c-item">
            <FaMobileAlt />
            <div className="text">+54 9 11 2345 6789</div>
          </div>

          <div className="c-item">
            <FaEnvelope />
            <div className="text"> info@zneakerz.com</div>
          </div>
        </div>

        <div className="col">
          <div className="title">Categorias</div>
          <Link to={"/categoria/Nike"}>
            <li>Nike</li>
          </Link>
          <Link to={"/categoria/Adidas"}>
            <li>Adidas</li>
          </Link>
          <Link to={`/categoria/Puma`}>
            <li>Puma</li>
          </Link>
        </div>

        <div className="col">
          <div className="title">Paginas</div>
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to={"/"}>
            <li>Store</li>
          </Link>
          <Link to="/aboutus">
            <li>About Us</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
