
import './App.css';
import Header from "././components/Header/Header"
import Main from "././components/Main/Main"
import Middle from "././components/Middle/Middle"
import Product from "././components/Product/Product"
import Slider from "././components/Slider/ExploreSection"
import Footer from "././components/Footer/Footer"
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Middle/>
      <Product/>
      <Slider/>
      <Footer/>
    </div>
  );
}

export default App;
