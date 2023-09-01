import React from "react";
import "../css/home.css";
import fondohome from "../../public/img/fondohome.jpg";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div>
        <img src={fondohome} alt="" />
        <h1 className="title">Bienvenidos a ZneakerZ</h1>

        <p className="textHome">
          Bienvenidos a ZneakerZ, el epicentro virtual de la cultura sneaker
          HYPE, donde la moda urbana cobra vida a través de tus pies. En
          ZneakerZ, no solo vendemos zapatillas, sino que ofrecemos una
          experiencia completa para los amantes del estilo audaz y vanguardista.
          Nuestro sitio web te invita a explorar una colección meticulosamente
          curada de zapatillas que van más allá de lo convencional. Desde las
          colaboraciones más codiciadas hasta los clásicos reinventados, cada
          par en ZneakerZ cuenta una historia única. Nuestra pasión por el
          diseño y la autenticidad se refleja en cada detalle de nuestra
          plataforma, desde la interfaz moderna hasta las descripciones
          detalladas de los productos. Lo que hace que ZneakerZ sea
          verdaderamente especial son nuestras colaboraciones de alto perfil.
          Trabajamos estrechamente con artistas visionarios, músicos influyentes
          y diseñadores creativos para traerte ediciones limitadas que son
          verdaderas obras de arte portátiles. Estas colaboraciones exclusivas
          son más que simples zapatillas; son declaraciones de estilo y cultura.
        </p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
