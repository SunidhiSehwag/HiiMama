import CategorySlider from "./components/CategorySlider";
import Header from "./components/Header";
import MainImageSection from './components/MainImageSection';
import MostLovedSection from "./components/MostLovedSection";
import RandomMealPicker from "./components/RandomMealPicker";

function App() {
  return (
    <>
      <Header/>  
      <MainImageSection/>  
      <MostLovedSection/>  
      <CategorySlider/>
      <RandomMealPicker/>
    </>
  );
}

export default App;
