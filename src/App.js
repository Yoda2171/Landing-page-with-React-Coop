import logo from './logo.svg';
import './App.css';
import Jumbotron from './component/jumb';
import Nav from './component/nav';

function App() {
  return (
    <>

      <Nav />
      <div className="container">
        <Jumbotron />

      </div>
      
    </>

  );
}

export default App;
