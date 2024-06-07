import { AllRoutes } from "./Routes/AllRoutes";
import { Header,Footer } from "./components";
import ScrollToTop  from "./components/ScrollToTop"
import './App.css';
function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
