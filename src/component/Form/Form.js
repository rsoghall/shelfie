import React, {Component} from 'react';
// import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            price: props.price,
            image_url: props.image_url
        }

        this.handleInputName = this.handleInputName.bind(this);
        this.handleInputPrice = this.handleInputPrice.bind(this);
        this.handleInputImage = this.handleInputImage.bind(this);
        this.baseState = this.state
        
        
    }
    
    
    cancelInput = () => {
        this.setState(this.baseState)
    }
    updateInventory = () => {

    }  

    handleInputName(){
        this.setState({
            name: ''
        })
    }

    handleInputPrice(){
        this.setState({
            price: null
        })
    }

    handleInputImage(){
        this.setState({
            image_url: ''
        })
    }
    
    

    
    render(){
        
        return(
        <div>
            <div>Form</div>
             <input onChange ={(e) => this.handleInputName(e.target.value)}
             value={this.state.name}
             placeholder ="Product Name:"/>

             <input onChange ={(e) => this.handleInputPrice(e.target.value)}
             value={this.state.price} 
             placeholder ="Price:"/>
             
             <input onChange ={(e) => this.handleInputImage(e.target.value)}
             value={this.state.image_url} placeholder ="Image URL:"/>
             <button onClick={this.cancelInput}>Cancel</button>
             <button onClick={this.updateInventory}>Update Inventory</button>
        </div>
        )

    }
}
export default Form