import React, { Component } from 'react';
import { CategoriaConsumer} from '../contex/CategoriasContex';
import { EventosConsumer} from '../contex/EventosContext';

class Formulario extends Component {
    state = { 
        nombre: '',
        categoria:''
     }
     //el usuario agrega un evento o categoria lo pasamos coon unas metodo por oe ohChange
    obtenerDatosEventos = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    

    render() { 
        return (
            <EventosConsumer>{(value)=>{
                    return(
                            <form
                                onSubmit={(e)=>{
                                    e.preventDefault()
                                        console.log("detecta el clcil");
                                    value.obtieneEventos(this.state)
                                }}
                            >
                                <fieldset className="uk-fieldset uk-margin">
                                    <legend className="uk-legend uk-text-center">
                                        Busca tu categoria
                                    </legend>
                                </fieldset>
                                
                                <div className="uk-column-1-3@m uk-margin">
                                    <div className="uk-margin" uk-margin="true">
                                        <input
                                        name="nombre"
                                        className="uk-input"
                                        type="text"
                                        placeholder="Nombre de evento"
                                        onChange= {this.obtenerDatosEventos} 
                                        />
                                    </div>
                                    <div className="uk-margin" uk-margin="true">
                                        <select 
                                        className="uk-select" 
                                        name="categoria"
                                        onChange= {this.obtenerDatosEventos} 
                                        >
                                            <option value="">--Seleccionas la categoria--</option>    
                                            <CategoriaConsumer>
                                                {(value)=>{
                                                    return (
                                                        value.categorias.map(categoria=>(
                                                            <option key={categoria.id} value={categoria.id} data-uk-form-select>{categoria.name_localized}</option>
                                                        ))
                                                    )
                                                }}
                                            </CategoriaConsumer>                                
                                        </select>
                                    </div>
                                    <div>
                                        <input type="submit" className="uk-button uk-button-danger" value="Busca Evento"/>
                                    </div>    
                                </div>
                            </form>
                            )
            }}
            </EventosConsumer>
         );
    }
}
 
export default Formulario;