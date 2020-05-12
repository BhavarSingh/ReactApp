import React, { Component } from 'react'
import {Consumer} from './context';
import uuid from 'react-uuid';
import TextInputGroup from './TextInputGroup';
import axios from 'axios';
export default class EditContacts extends Component {

    
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

 async componentDidMount(){
     const {id} = this.props.match.params;
     const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

     const contact = res.data;

     this.setState({
         name: contact.name,
         email:contact.email,
         phone:contact.phone
     });
 }
  onChange = e =>{
    this.setState({[e.target.name]: e.target.value});
    console.log(e.target.value);
  }  // [propName] using [] is essential and let use directly call props var by name 

  onSubmit = async (dispatch,e) => {
      e.preventDefault();
    const {name, email, phone} = this.state;

    //Check for errors
    if(name ==''){
        this.setState({errors:{name:'Name is required'}});
        return;
    }
    if(email ==''){
        this.setState({errors:{email:'Email is required'}});
        return;
    }
    if(phone ==''){
        this.setState({errors:{phone:'Phone is required'}});
        return;
    }
   
    const updContact = {
        name,
        email,
        phone
    }
    const {id} = this.props.match.params;
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`)
    

    //clear props
    this.props.setState({
        name:'',
        email:'',
        phone:'',
        errors:{}
    }
    );

    this.props.history.push('/');

    };
    render() {
        const {name, email, phone, errors} = this.state;
        
        return (
            <Consumer>
                {value => {
                    const { dispatch} = value;
                    return(
                        
            <div className="card mb-3">
            <div className="card-header">Edit Contct</div>
            <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                   <TextInputGroup
                        label="Name"
                        name="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange = {this.onChange}
                        error ={errors.name}
                   />
                   <TextInputGroup
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange = {this.onChange}
                        error ={errors.email}
                   />
                   <TextInputGroup
                        label="Phone"
                        name="phone"
                        placeholder="Enter Phone"
                        value={phone}
                        onChange = {this.onChange}
                        
                        error ={errors.phone}
                   />
                   

                    <input type="submit" value="Edit Contact" className="btn btn-light btn-block"/>
                </form>
            </div>
                           
          </div>

                    )
                }}
            </Consumer>
        )
        
    }
}