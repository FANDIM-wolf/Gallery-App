import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


function AddUser() {

   
    const [userInput, setUser] = useState({
        name: '',
        course: '',
        email: '',
        phone: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setUser({...userInput, [e.target.name]: e.target.value })
    }

    const saveUser = (e) => {
        e.preventDefault();
        
        const data = {
            name:userInput.name,
            course:userInput.course,
            email:userInput.email,
            phone:userInput.phone,
        }

        axios.post(`http://127.0.0.1:8000/api/add-user`, data).then(res => {

            if(res.data.status === 200)
            {
                
                setUser({
                    name: '',
                    course: '',
                    email: '',
                    phone: '',
                    error_list: [],
                });
                //history.push('/users');
            }
            else if(res.data.status === 422)
            {
                setUser({...userInput, error_list: res.data.validate_err });
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
                                <h4>Add User 
                                    <Link to={'/'} className="btn btn-danger btn-sm float-end"> BACK</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                
                                <form onSubmit={saveUser} >
                                    <div className="form-group mb-3">
                                        <label>User Name</label>
                                        <input type="text" name="name" onChange={handleInput} value={userInput.name} className="form-control" />
                                        <span className="text-danger">{userInput.error_list.name}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>User Course</label>
                                        <input type="text" name="course" onChange={handleInput} value={userInput.course}  className="form-control" />
                                        <span className="text-danger">{userInput.error_list.course}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>User Email</label>
                                        <input type="text" name="email" onChange={handleInput} value={userInput.email}  className="form-control" />
                                        <span className="text-danger">{userInput.error_list.email}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>User Phone</label>
                                        <input type="text" name="phone" onChange={handleInput} value={userInput.phone}  className="form-control" />
                                        <span className="text-danger">{userInput.error_list.phone}</span>
                                    </div>

                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Save User</button>
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

export default AddUser;