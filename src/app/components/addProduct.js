import React, {Component} from 'react'

class AddProduct extends Component{
    constructor(props){
        super(props)
        this.state = {
            nombre:'',
            productos:[],
            nameProduct:[]
        }
        this.handlechange = this.handlechange.bind(this)
    }
    addProduct(e){
        //console.log(this.state.nombre)
        e.preventDefault();
        //recorre todos los nombre en el servidor
        (()=>{
            fetch('/api/productos')
                .then(res => res.json())
                .then(product =>{
                    //console.log('todobien')
                    this.setState({productos :product});
                    let data = []
                    this.state.productos.map(name =>{
                        let names = name.nombre
                        data.push(names)
                    })
                    this.setState({nameProduct:data})
                    data.indexOf(this.state.nombre) > -1 ? alert('El Producto Existe') :
                        //enviar a la BD
                        fetch('/api/productos',{
                            method:'POST',
                            body: JSON.stringify(this.state),
                            headers:{
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            }
                        })
                            .then(res => res)
                            .catch(err=> console.error(Error))
                        //console.log('lo estamos enviando')
                        document.getElementById("form").reset();
                        document.getElementById("nombre").focus();
                         // pintar todo de nuevo
                            this.props.fetchProduct()

            })
        })()

    }
    handlechange(e){
        const a = e.target.value
        this.setState({nombre:a})
    }
    render(){
        return(
            <form id='form' onSubmit={() => this.addProduct(event)}>
                <h3>Add Productos</h3>
                <label>Nombre del producto</label>
                <input
                    type='text'
                    id='nombre'
                    onChange={this.handlechange}
                ></input>
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default AddProduct