import React, {useState, useEffect , Component }  from 'react';
import {Link , useParams} from 'react-router-dom';
import axios from 'axios';


// // Get ID from URL
//const {id} = useParams();
//`http://127.0.0.1:8000/api/images/get/${id}`

function ViewAnImage () {
    const [image, setImage] = useState([]);

    
      // Get ID from URL
    const {id} = useParams(); 

  
    useEffect(() => {
      axios
        .get(`http://127.0.0.1:8000/api/images/get/${id}`)
        .then((response) => {
          if (response.status === 200) {
        
          
            setImage(response.data.data);
            console.log(response.data);
            
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);   
            
     
        
  return (  
    <div>  
           <div className="col-xl-6 col-lg-8 col-sm-12 col-12 mt-3" key={image.id}>
                                    <img src={ "http://localhost:8000/uploads/" + image.image_name } className="img-fluid img-bordered" width="200px"
                                    />
            </div>
    </div>  
  ); 
    
     
    
  }

export default ViewAnImage;