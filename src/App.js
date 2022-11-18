import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Project from './components/Project';
// import {Header} from './components/Header';

function App() {
  return (
    <div className="App">
      <Header>
        <Navigation>

        </Navigation>
      </Header>
      <p>Multiple projects</p>
      <Project></Project>
      <Footer></Footer>
    </div>
  );
}

export default App;
