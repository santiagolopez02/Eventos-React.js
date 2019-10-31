import React, { Component } from 'react';
import axios from 'axios';

const EventosContext = React.createContext();

export const EventosConsumer = EventosContext.Consumer;



class EventosProvider extends Component {
     token = `E3MK3XP23STZKQS5ECKI`; 
     ordenar = 'date'; 
    //obtiene eventos
    obtenerEventos = async(busqueda)=>{
        let ulrE = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;
    //cosnulta la api con la url
        const evento = await axios(ulrE);
       
        console.log(evento.data.events);

        this.setState({
            eventos: evento.data.events
        })
    }
    state = { 
        eventos : []
     }

    render() { 
        return ( 
            <EventosContext.Provider
                value ={{
                    eventos: this.state.eventos,
                    obtieneEventos: this.obtenerEventos
                }}
            >
                {this.props.children}
            </EventosContext.Provider>
         );
    }
}
 



export default EventosProvider;