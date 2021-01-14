import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Jumbotron from './component/jumb';
import Nav from './component/nav';
import  Cards from "./component/Cards";
import Footer from './component/Footer';



function App() {
  return (
    <>
      <Nav />
      <div className="container">
          <Jumbotron />
          <Cards />
      </div>
      <Footer />
    </>
  );
};

export default App;
