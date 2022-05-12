// import './App.css';
// import './Style.css';
import Header from "./components/cabecera/Header";
import Cuerpo from "./components/cuerpo/cuerpo";
import Contenedores from "./components/cuerpo/contenedores";
import Slider from './components/Slider/Slider';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Cuerpo/>
      {/*<Contenedores/>*/}
      {/*<Slider />*/}
      <Services />
      <Footer />
    </div>
  );
}

export default App;
