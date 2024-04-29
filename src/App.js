// import logo from './logo.svg';
import {Route,Routes} from 'react-router-dom'
// import Header from './components/Header'
import Collections from './components/Collections'
import Materials from './components/Materials'
import './App.css';


function App() {
  return (
    <Routes>
      
      <Route exact path="/" element={<Collections/>} />
      <Route exact path="/materials" element={<Materials/>} />
      
    </Routes>
  );
}

export default App;
