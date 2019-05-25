import React, {Component} from 'react'
export default class Forms extends Component{
    constructor(){
        super()
        this.state={
            inputName:'',
            inputTwitter:'@',
            inputTerms:true
        }
    }
    handleSubmit=(e)=>{
        //evento para evitar que el boton haga submit
        e.preventDefault()
       console.log(this.state)
        
    }
    handleChange = (e)=>{
     console.log('handleChange')
     console.log(e.target.checked)
     this.setState({inputTerms:e.target.checked})
    }
    render(){
      return(
       <div>
          <h4> Formulario</h4>
              <form onSubmit={this.handleSubmit}>
                  
              <p> 
                <label htmlFor='name'>Nombre:</label>
                    <input
                    id='name'
                    name='userName'
                    onChange={e=>this.setState({inputName:e.target.value})}
                    placeholder='Introduce el nombre'
                    ref={inputElement=>this.inputName=inputElement}
                    value={this.state.inputName}
                  />  

               </p>       
               <p>
                 <label htmlFor='facebook'> Twiter:</label>
                 <input
                    
                    id='facebook'
                    name='facebook'
                    onChange={e=>this.setState({inputTwitter:e.target.value})}

                    placeholder='Introduce tu facebook'
                    value={this.state.inputTwitter}
                  />  
                  <button >Enviar </button>
               </p>
                <p>
                    
                    <label>
                        <input 
                        checked={this.state.inputTerms}
                        onChange={this.handleChange}

                        type='checkbox'/>
                        Accept terms 
                    </label>
                </p>
              
              </form>


           </div>


      )

    }
}