import React from 'react';
import { EventosConsumer } from '../contex/EventosContext';
import Evento from './Evento'

//componente del listado de eventos
const ListaEventos = () => {
    return ( 
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <EventosConsumer>
                {(value)=>{
                    console.log(value);                    
                    return (
                        value.eventos.map(evento=>(
                        <Evento
                        evento = {evento}
                        key={evento.id}
                        />
                    ))
                    )
                }}
            </EventosConsumer>
        </div>
     );
}
 
export default ListaEventos;