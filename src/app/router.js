import React from 'react'
import {Switch , Route} from 'react-router-dom'
import ListaCompra from './components/pListaCompra';
import AddProductos from './components/pAddProduct';




const Routes = ()=>{
    return(
        <Switch>
            <Route exact path='/' component={ListaCompra}/>
            <Route path='/product' component={AddProductos}/>
        </Switch>
    )
}

export default Routes