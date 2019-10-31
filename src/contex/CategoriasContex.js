import React, { Component } from 'react';
import axios from 'axios';

//Crear el context
const CategoriasContext = React.createContext();

//Crea el Consumer
export const CategoriaConsumer = CategoriasContext.Consumer;

//Crea el provider = class component
class CategoriasProvider extends Component {
//crea un toke para guardar el token private para autentificar las respuesta
    token = `E3MK3XP23STZKQS5ECKI`;    
//metodo de ciclo de vida
componentDidMount(){
    this.obtenerCategorias();
}    
obtenerCategorias = async() =>{
//url con modificacion de toke y de locale
   let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`; 
//llamado a la api con AXIOS en lugar de fecht
    let categorias = await axios.get(url);
//setaer el state con las categorias que devuelve la api
this.setState({
    categorias: categorias.data.categories
})
}

    state = { 
        categorias:[]
     }

    render() { 
        return ( 
            //acceder al provider 
            <CategoriasContext.Provider
                value ={{
                    categorias : this.state.categorias
                }}
            >
                {this.props.children}    
            </CategoriasContext.Provider>
        );
    }
}
 
export default CategoriasProvider;