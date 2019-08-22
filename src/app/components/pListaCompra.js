import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class ListaCompra extends Component{
    render(){
        return(
            <div>
            <div>
                    <ul>
                        <li>
                            <Link to='/product'>Addproducto</Link>
                        </li>
                    </ul>
                </div>
            <h1>esta es nuestra lista de la comra
            </h1>
            </div>
        )
    }
}
export default ListaCompra