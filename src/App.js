
import classes from './App.css';
import HomeSearchPage from "./Components/Homepage-Search/HomeSearchPage";
import NavBar from "./Components/Navbar/NavBar";


function App() {


  return <div className={classes.app}>
    <NavBar /> 
    <HomeSearchPage />
    
  
  </div>;
}

export default App;
