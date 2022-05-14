import { Component } from "react";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";

const styles ={
  container:{
      display: 'flex',
  }
}

class App extends Component {
  state = {
    getUrl: [{url:''}],
}  
  render() {
    return (
      <div style={styles.container}>
          <Sidebar />
          <Layout />
      </div>
    );
  }
}

export default App;
