import React from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import ListaEventos from './componentes/ListadoEventos';
import CategoriasProvider from './contex/CategoriasContex'
import EventosProvider from './contex/EventosContext'

//CONTEXT REACT para reemplazar las props
//Provider-Consumer
function App() {
  return (
    <EventosProvider>
      <CategoriasProvider>
        <Header/>

          <div className="uk-container">
            <Formulario/>
            
            <ListaEventos/>
          </div>

      </CategoriasProvider>
    </EventosProvider>
  );
}

export default App;
