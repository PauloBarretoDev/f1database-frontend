import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navabar from './layout/Navabar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddPiloto from './pilotos/AddPiloto';
import EditPiloto from './pilotos/EditPiloto';
import ViewPiloto from './pilotos/ViewPiloto';

function App() {
  return (
    <div className="App">
      <Router>
      <Navabar />

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/addpiloto" element={<AddPiloto/>}/>
        <Route exact path="/editpiloto/:id" element={<EditPiloto/>}/> 
        <Route exact path="/viewpiloto/:id" element={<ViewPiloto/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
