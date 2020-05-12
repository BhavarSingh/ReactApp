import React, { Component } from 'react'

export default class Test extends Component {

    state  ={
        title:'',
        body:''
    };
    //Testing component states
    componentDidMount(){
        console.log('componentDidMount...');
        const fetchedApi =   fetch('https://jsonplaceholder.typicode.com/posts/1')
         .then(response => response.json())
         .then(data => 
            this.setState({
                title: data.title,
                body: data.body
            }));
        console.log(fetchedApi);
    }
    // componentWillMount(){
    //     console.log('componentWillMount...');
    // }
    // componentDidUpdate(){
    //     console.log('componentDidUpdate...');
    // }
    // componentWillReceiveProps(nextProps, nextState){
    //     console.log('componentWillRecieveProps...');
    //     }
        // static getDerivedStateFromProps(nextProps,prevState){
        //     return null;
        // }
    render() {
        const {title,body} = this.state;
        return (
            <div>
                <h1>{body}</h1>
            </div>
        )
    }
}
