// Componentes
import Alerta from "./assets/componentes/alerta/Alerta";
import Beneficios from "./assets/componentes/beneficios/Beneficios";
import Navbar from "./assets/componentes/navbar/Navbar";
import Home from "./assets/componentes/home/Home";
import BloqueLateral from "./assets/componentes/bloque-lateral/BloqueLateral";
import Partner from "./assets/componentes/partner/Partner";
import Carrusel from "./assets/componentes/carrusel/Carrusel";
import Carrito from "./assets/componentes/carrito/Carrito";
import Footer from "./assets/componentes/footer/Footer";

// Liberarías
import React, { useEffect, useState } from 'react';
import axios from "axios";

// Endpoints
import { ConexionesApi } from "./assets/Diccionario";

const bloqueLateral1 = {
  titulo: "¿Quiénes Fabrican Tus Prendas?",
  texto: "Nuestra misión es ayudar a crecer el ecosistema local de indumentaria en Argentina y toda Latinoamérica",
  checks: [
    "Conectamos con los productores locales.",
    "Porque tiene más sentido comprar algo hecho por una persona cercana que por una empresa lejana.",
    "Porque los productos locales hacen de nuetro rincón del mundo un lugar mejor para vivir.",
    "Porque fomentamos el empleo local.",
    "Porque tiene más sentido para el medio ambiente."],
  textoBoton: "Descubrí nuestros productos",
  imagen: "https://images.pexels.com/photos/6211446/pexels-photo-6211446.jpeg",
}

const bloqueLateral2 = {
  direccion: "izquierda",
  titulo: "Sorprende a alguien Trabajando desde casa",
  texto: `¿Tienes un colega o familiar que trabaja duro en casa? Nuestra caja   de prendas "Trabajar desde casa" es la forma perfecta de hacerlos sonreír, con entrega directa en su domicilio.
        Si quieres comprar para un grupo grande de personas, ponte en contacto con nosotros y hablaremos de paquetes a medida y mensajes personalizados.`,
  checks: null,
  textoBoton: "Comprar Ahora",
  imagen: "https://images.pexels.com/photos/6124349/pexels-photo-6124349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}

function App() {

  // Obtiene el contenido estático de la página
  const [contenido, setContenido] = useState([]);

  useEffect(() => {
    axios.get(ConexionesApi.contenido)
      .then(res => {
        setContenido(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  // Obtiene las rutas de la página, por ejemplo los links del navbar
  const [rutas, setRutas] = useState([]);

  useEffect(() => {
    axios.get(ConexionesApi.rutas)
      .then(res => {
        setRutas(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <Alerta data={contenido} />
      <header>
        <Navbar contenido={rutas} />
        <Carrito />
      </header>
      
      <main className="container">

        <Home data={contenido} />
        
        <Beneficios data={contenido} />
        {/*
        <BloqueLateral props={bloqueLateral1} />

        <Partner titulo="Nuestro socio benéfico" img="https://caritas.org.ar/wp-content/uploads/2021/05/logo-caritas.svg" texto="Donamos el 5% de nuestras ganancias a nuestro socio benéfico" />

        <BloqueLateral props={bloqueLateral2} />
        <Carrusel />
        */}
      </main>
      <Footer /> 
      </>
      );
}

      export default App;
