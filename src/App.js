
import './App.css';
import { BrowserRouter  ,Route,Routes} from "react-router-dom";
import TableData from './components/TableData';
import Router from './components/Form';
import Update from './components/Update';


function App() {



  return (
    <div className="App">
     
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Router/>}></Route>
        <Route path='/TableData' element={<TableData/>}></Route>
        <Route path='/Update' element={<Update/>}/>
      </Routes>
      </BrowserRouter>
   

    </div>
  );
}

export default App;
