import React, { Component } from 'react';

import lista from '../controller/categorias';

class CategoriasList extends Component {
  state = {
    categorias: []
  };

  getListaCategoria = () => {
    const listaCateg = (lista);
    this.setState({ categorias: [ listaCateg ] })
  }

  render() {
    return (
      <>
      <ul>
        {this.state.categorias.map(item => <li key={item.id}>{item.category}</li>)}
      </ul>
      </>
    );
  }
}

export default CategoriasList;