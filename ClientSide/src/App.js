import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import ImageUpload from './components/ImageUpload';
import {BrowserRouter,Route,Routes,Switch} from 'react-router-dom'
import Login from './components/login';
import AddUser from './components/add_user';
function App() {
  return (
    <BrowserRouter>
    <Header/> 
    <Routes>
      
    
    <Route exact path="/login" element={<Login/>}>
     </Route>
     <Route exact path="/adduser" element={<AddUser/>}>
     </Route>  
    <Route path="/upload-image" element={ <ImageUpload/> }>
      </Route>
   
    
    
  
</Routes>
   </BrowserRouter>
  );
}

export default App;
