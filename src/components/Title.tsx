import { Component } from "react";

const styles ={
    title:{
        marginBottom: '30px',
    }
}

class Title extends Component{
    render(){
        return (
        <h1 style={styles.title}>Paggos Dog App</h1>
        )
    }
}

export default Title;