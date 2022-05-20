import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import ImageUpload from './components/ImageUpload';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './components/login';
import AddUser from './components/add_user';
import ViewUser from './components/view_user';
import EditUser from './components/edit_user';
import ViewAnImage from './components/view_an_image';
function App() {
  return (
    <BrowserRouter>
    <Header/> 
    <Routes>
      
    
    <Route exact path="/login" element={<Login/>}>
     </Route>
     <Route exact path="users/add-user" element={<AddUser/>}>
     </Route>  
     <Route exact path="users/edit-user/:id" element={<EditUser/>}>
     </Route>
     <Route exact path="/users" element={<ViewUser/>}>
     </Route>
    <Route path="/upload-image" element={ <ImageUpload/> }>
    </Route>
      <Route path="/view-image/:id" element={<ViewAnImage/>}></Route>

   
    
    
  
</Routes>
   </BrowserRouter>
  );
}

export default App;
