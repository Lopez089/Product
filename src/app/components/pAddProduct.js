import React, {Component} from 'react'
import ShowProducts from './showProducts'
import AddProduct from './addProduct';
import {Link} from 'react-router-dom'
class AddProductos extends Component{
    constructor(){
        super()
        this.state ={
            productos: []
        }
    }
    componentDidMount(){
        this.fetchProduct()
    }
    fetchProduct(){
        fetch('/api/productos')
            .then(res => res.json())
            .then(product =>{
                //console.log('todobien')
                this.setState({productos :product });
            })
    }
    render(){
        return(
            <div>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>Lista de compra</Link>
                        </li>
                    </ul>
                </div>
                <h1>todos mis productos</h1>
                <ShowProducts 
                    product={this.state.productos} 
                    fetchProduct={()=>this.fetchProduct()}

                />
                <AddProduct 
                    fetchProduct={()=>this.fetchProduct()}

                />
            </div>
        )
    }
}

export default AddProductos