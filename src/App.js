// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/About'
import Counting from './components/Counting';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={ <About /> } />
          <Route path='/counting' element={ <Counting /> } />
          {/* <Route path='/' element={ <LoginPage />} /> */}
        </Routes>
    </div>
  );
}

export default App;
