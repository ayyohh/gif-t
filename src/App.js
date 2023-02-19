
import classes from './App.css';
import HomeSearchPage from "./Components/HomeSearchPage";
import NavBar from "./Components/NavBar";


function App() {


  return <div className={classes.app}>
    <NavBar /> 
    <HomeSearchPage />
    
  
  </div>;
}

export default App;
