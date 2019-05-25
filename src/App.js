import React,{Component} from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types'
import './App.css';

import cars from './data/cars.json'
import Forms from './sections/forms'
class Box extends Component{
  render(){
    return(
    <div style={{border:'1px solid #09f',margin:5,padding:5}}>
       {this.props.children}
        </div>
    )
  }
}
function Article (props) {
  return (
    <section>
      <h2>{props.title}</h2>
      <p><em>Escrito por {props.author}</em></p>
      <date>{props.date}</date>
      <article>
        {props.children}
      </article>
    </section>
  )
}
const Button = ({ borderColor = 'red', label }) => (
  <button style={{ borderColor, display: 'block' }}>
    {label}
  </button>
)

Button.propTypes = {
  borderColor: PropTypes.string,
  label: PropTypes.string.isRequired
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  children: PropTypes.any
}

class CarItem extends Component{
  render(){
   const {car,id}=this.props
   return (
    <li  >
      <p>  key={id}</p>
    <p> <strong> Nombre: </strong>{car.name}</p>
    <p> <strong>Marca:  </strong> {car.company} </p>
     
    </li>

   )
  }
}
class App  extends Component {
  constructor(props){
    console.log('constructor')
    super(props)
    this.state={mouseX:0,mouseY:0}
    this.state={mensajeInicial:'old'}
   //las arrow function siempre enlazan el contexto desde donde se declara
  }
  handleClick1=()=>{
    this.setState({mensajeInicial:'mensaje cambiado'})
  }
  handleMouseMove=(e)=>{
    const{clientX,clientY}=e
    this.setState({mouseX:clientX,mouseY:clientY})
  }
  handleClick(e){
    console.log(e)
    alert('Hi there!')
  }
  render (){
    const numbers=[1,1,2,3,4,5]
  return (
    <div className="App">
    <h4> Trabajando con Lista y Eventos</h4>
   <Article
    
    date={new Date().toLocaleDateString()}
    title='Articulo sobre la prop children'
   >
       <p> El contenido que envolvemos dentro del componente Article sera enviado al componente this.props.children</p>
     <strong> y mantiene las etiquetas y componentes que hayas añadido dentro</strong> 
     </Article>
     <br/>
     <Button label='Comentar artículo' />

    <button  onClick={this.handleClick}> Hi there </button>
    <div
    onMouseMove={this.handleMouseMove}
    style={{border:'1px solid #09f',marginTop:10,padding:10}}
    > 
      
     <p>  {this.state.mouseX},{this.state.mouseY}</p>
    </div>
    <Forms />
  <div>
    <h4>  Ciclo de montaje: constructor</h4>
    {this.state.mensajeInicial}
    <button onClick={this.handleClick1}>
       cambair mensaje
      </button>

      </div>
 <ul>
   {/*
     cars.map(car=>{
        return <CarItem id={car.id} key={car.id} car={car}/>
        
     })*/
     
    
      
     

   }


   </ul>

    </div>
  );
}
}
export default App;
