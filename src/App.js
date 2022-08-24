import Navigation from "./components/Navigation";
import Data from "./Data";
import Footer from "./components/Footer";
import TrendingPage from "./components/TrendingPage";
import useLocalStorage from "use-local-storage";
import './index.css';


function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
      <div className="app" data-theme={theme}>
        <Navigation 
        toggle={switchTheme}
        name={theme}
        />
        <Data />
        <TrendingPage />
        <Footer 
        toggle={switchTheme}
        name={theme}
        />
      
      </div>
    
  );
}

export default App;
