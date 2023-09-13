// import logo from './logo.svg';
// import './App.css';
import AppBar from './components/AppBar';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <AppBar />
      <div className="teaMenu">
    
        <Header/>
        <hr className="top-line" />
        <Main/>  

           
    </div>
    </div>
  );
}

export default App;
