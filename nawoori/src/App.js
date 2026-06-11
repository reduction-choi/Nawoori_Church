import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import ChurchIntro from './pages/ChurchIntro.tsx';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
      <ChurchIntro></ChurchIntro>
    </div>
  );
}

export default App;
