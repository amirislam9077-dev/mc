import './App.css';
import Header from './component/header';
import Slider from './component/slider';
import Product from './component/product';
import Popular from './component/popular';
import PopularPro from './component/popularpro';
import Burger from './component/burger';
import BurgerPro from './component/burgerpro';
import Night from './component/night';
import NightPro from './component/nightpro';
import Function from './component/function';
import FunctionPro from './component/functionpro';
import Family from './component/family';
import FamilyPro from './component/familypro';
import Ice from './component/ice';
import IcePro from './component/icepro';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Product />
      <Popular />
      <PopularPro />
      <Burger />
      <BurgerPro />
      <Night />
      <NightPro />
      <Function />
      <FunctionPro />
      <Family />
      <FamilyPro />
      <Ice />
      <IcePro />
      <Footer />
    </div>
  );
}

export default App;
