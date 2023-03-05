import './App.css';

function App() {
  return (
    <div className="header_tacos" id='tacos'>
      <header className='nav'>
        <nav className='navbar'>
          <h1 className="title_nav"><b>"El taco veloz"</b></h1>
          <p class="item_nav"><a href="tacos">Inicio</a> </p>
          <p class="item_nav"><a href="nosotros">Nosotros</a> </p>
          <p class="item_nav"><a href="contacto">Contacto</a> </p>
      </nav>
    </header>
    <main>
      <div class="intro">
        <div className='imagen_taco'>
          <p className='img_texto'>Ven a probarlos!</p>
        </div>
        <div className='intro_texto'>
          <h1>EL MEJOR TACO ES EL VELOZ</h1>
          <h3>Le ofrecemos la mejor calidad en tacos en toda la ciudad, mas de 20 años nos respaldan, con los mejores ingredientes para llevarle a su mesa los mejores tacos </h3>
          <p>La mejor calidad de tacos en toda la region y al mejor precio</p> 
        </div>
        
      </div>
        
      <div className='reserva'>
        <h2>
          Reserva con nosotros
        </h2>
        <p>
          A partir de tu contacto, nos comunicaremos contigo para revisar fechas disponibilidad de horarios.
        </p>
        <p>
          Centro Histórico, Ciudad de México, MX 12345
        </p>
        <p>
          Telefono: +1 (555) 123-4567
          Email: contacto@tacoveloz.com
        </p>

        
        </div>

        <div className="contacto">
          <form className='input_reserva'>
            <input type="text" name="full_name" id="full_name" autocomplete="name"class="name" placeholder="Tu nombre"></input>
            <input id="email" name="email" type="email" autocomplete="email"class="email" placeholder="Email"></input>
            <input type="text" name="phone" id="phone" autocomplete="tel"class="telefono" placeholder="Teléfono"></input>
            <textarea id="message" name="message" rows="4" class="Mensaje"placeholder="Mensaje y comentarios"></textarea>
            <button>Enviar</button>
          </form>

        </div>

    </main>
    <footer className='pie_pagina'>
      2021. UCamp. Todos los derechos reservados.
      Esta es una aplicación ficticia para fines académicos.
    </footer>
    </div>
  );
}

export default App;
