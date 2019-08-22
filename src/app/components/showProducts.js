import React, {Component} from 'react'

class ShowProducts extends Component{
    constructor(props){
        super(props)
    }
    handleDelate(id){
        let a = confirm("Deseas eliminar el Producto");
        if(a == true){
            fetch(`/api/productos/${id}`,{
                method: 'DELETE',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            
        }
        this.props.fetchProduct()
    }
    render(){
        return(
            <div className='ShowProducts'>
                <ul>
                    {
                        this.props.product.map(product=>{
                            return(
                                <li key={product._id}>{product.nombre}
                                    <i className="far fa-trash-alt" onClick={()=>this.handleDelate(product._id)}></i>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ShowProducts