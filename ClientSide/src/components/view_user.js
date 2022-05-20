import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


function ViewUser() {

    
    const [users, setUsers] = useState([]);

    useEffect(() => {

        axios.get(`http://127.0.0.1:8000/api/users`).then(res=>{
            if(res.status === 200)
            {
                setUsers(res.data.users)
                
            }
        });

    }, []);

    const deleteUser = (e, id) => {
        e.preventDefault();
        
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axios.delete(`http://127.0.0.1:8000/api/delete-user/${id}`).then(res=>{
            if(res.data.status === 200)
            {
                
                thisClicked.closest("tr").remove();
            }
            else if(res.data.status === 404)
            {
                
                thisClicked.innerText = "Delete";
            }
        });
    }

    
        var user_HTMLTABLE = "";
        // structure as html table
        user_HTMLTABLE = users.map( (item, index) => {
            return (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.course}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                        <Link to={`edit-user/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                    </td>
                    <td>
                        <button type="button" onClick={(e) => deleteUser(e, item.id)} className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
            );
        });
    

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>User Data
                                    <Link to={'add-user'} className="btn btn-primary btn-sm float-end"> Add User</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Course</th>
                                            <th>Email Id</th>
                                            <th>Phone</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {user_HTMLTABLE}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ViewUser;