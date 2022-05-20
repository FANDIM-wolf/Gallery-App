import React, {useState, useEffect} from 'react';
import {Link , useParams} from 'react-router-dom';
import axios from 'axios';


function EditUser() {

    
    //const [loading, setLoading] = useState(true);
    const [userInput, setUser] = useState([]);
    const [errorInput, setError] = useState([]);


    // Get ID from URL
    const {id} = useParams();
  
    useEffect(() => {
        
        
        axios.get(`http://localhost:8000/api/edit-user/${id}`).then( res => {

            if(res.data.status === 200)
            {
                
                console.log("User has found " , id)
            }
            else if(res.data.status === 404)
            {
                console.log("User undefined " , id)
            }
        });

    });
    

    //get data from inputs
    const handleInput = (e) => {
        e.persist();
        setUser({...userInput, [e.target.name]: e.target.value });
    }

    const updateUser = (e) => {
        e.preventDefault();
        
        
        // const data = studentInput;
        const data = {
            name: userInput.name,
            course: userInput.course,
            email: userInput.email,
            phone: userInput.phone,
        }

        axios.post(`http://127.0.0.1:8000/api/update-user/${id}`, data).then(res=>{
            if(res.data.status === 200)
            {
                
                setError([]);
                console.log(data , 200);
            }
            else if(res.data.status === 422)
            {
                console.log(data , 422);
                setError(res.data.validationErrors);
            }
            else if(res.data.status === 404)
            {
                console.log(data , 404 , id);
                
            }
        });
    }

   
    
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Students 
                                    <Link to={'/viewuser'} className="btn btn-danger btn-sm float-end"> BACK</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                
                                <form onSubmit={updateUser} >
                                    <div className="form-group mb-3">
                                        <label>User Name</label>
                                        <input type="text" name="name" onChange={handleInput}  className="form-control" />
                                        <span className="text-danger">{errorInput.name}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>User Course</label>
                                        <input type="text" name="course" onChange={handleInput}   className="form-control" />
                                        <span className="text-danger">{errorInput.course}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>User Email</label>
                                        <input type="text" name="email" onChange={handleInput}  className="form-control" />
                                        <span className="text-danger">{errorInput.email}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>User Phone</label>
                                        <input type="text" name="phone" onChange={handleInput} className="form-control" />
                                        <span className="text-danger">{errorInput.phone}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" id="updatebtn" className="btn btn-primary">Update User</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default EditUser;