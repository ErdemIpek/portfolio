import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Header from './components/header';
import Particles from 'react-particles-js';


function App() {
  return (
    <body style={{ 
      backgroundColor:"#161616",width: '100vw',
      height: '100vh',
      position: "fixed",
      backgroundSize:"cover",
      backgroundPosition:"50% 50%",
      
    }}>
       <Particles style={{ 
        position: "fixed",
    }}/>
      <Navbar/>
      <Header/>
      
    </body>
  );
}

export default App;
