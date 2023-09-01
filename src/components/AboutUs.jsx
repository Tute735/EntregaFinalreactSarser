import React from "react";
import aboutus from "../../public/img/aboutus.jpg";
import "../css/about.css";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div className="containerAbout">
      <div className="containerimg">
        <img className="imgAbout" src={aboutus} alt="" />
      </div>
      <h1 className="titleAbout">Nosotros</h1>
      <div className="contenerTextAbout">
        <p className="textAbout">
          En ZneakerZ, nuestra pasión por el estilo de vida urbano y la moda
          vanguardista nos impulsa a ser más que una simple tienda de
          zapatillas. Somos un destino virtual donde el arte, la creatividad y
          la autenticidad se fusionan para brindarte una experiencia de compra
          única y estimulante. Nuestra historia comenzó con un amor compartido
          por las zapatillas de edición limitada y la moda de alto impacto. Lo
          que comenzó como una búsqueda personal para encontrar piezas únicas y
          expresivas, evolucionó rápidamente en una visión compartida: ofrecer a
          nuestra comunidad la oportunidad de expresarse a través del estilo.
          Así nació ZneakerZ. En ZneakerZ, nos enorgullece presentar una
          colección cuidadosamente seleccionada de zapatillas HYPE que son mucho
          más que simples accesorios: son una manifestación de la individualidad
          y la creatividad de cada individuo. Nuestro equipo está constantemente
          explorando el mundo de la moda streetwear para traerte las
          colaboraciones más emocionantes y los diseños más audaces.
        </p>
        <p className="textAbout">
          {" "}
          Cada par en nuestra colección tiene una historia que contar y un
          estilo que expresar. No somos solo una tienda en línea, sino una
          comunidad vibrante y apasionada. Nuestra plataforma no solo te ofrece
          la oportunidad de comprar zapatillas de élite, sino también de
          sumergirte en el mundo de la cultura HYPE. Únete a nuestras
          discusiones animadas, conoce a otros entusiastas y comparte tus
          propias experiencias. Creemos en la conexión y la inspiración mutua
          que emana de nuestra comunidad global. En ZneakerZ, la experiencia del
          cliente es fundamental. Nos esforzamos por brindarte un servicio
          excepcional desde el momento en que exploras nuestro sitio hasta que
          recibes tus zapatillas en la puerta de tu casa. Nuestro compromiso con
          la calidad, la autenticidad y la satisfacción del cliente es
          inquebrantable. Gracias por ser parte de nuestra historia en constante
          evolución. ZneakerZ es más que una marca; es un movimiento que te
          invita a moverte a tu propio ritmo y a abrazar tu estilo individual
          con confianza. Bienvenido a nuestro mundo, donde las zapatillas son el
          lienzo y tú eres el artista. Únete a la revolución del estilo en
          ZneakerZ y lleva tu pasión por las zapatillas al siguiente nivel.
          Equipo ZneakerZ
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
