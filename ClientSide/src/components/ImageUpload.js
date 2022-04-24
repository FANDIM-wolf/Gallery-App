import React, { Component } from 'react';
import axios from 'axios';
import Images from "./Image";

export default class ImageUpload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: "",
            responseMsg: {
                status: "",
                message: "",
                error: "",
            },
        };
    }

    // image onchange hander
    handleChange = (e) => {
        const imagesArray = [];
    let isValid = "";

    for (let i = 0; i < e.target.files.length; i++) {      
      imagesArray.push(e.target.files[i]);
    }
    this.setState({
      image: imagesArray,
    });
    }

    // submit handler
    submitHandler = (e) => {
        e.preventDefault();
    const data = new FormData();
    for (let i = 0; i < this.state.image.length; i++) {
      data.append("images[]", this.state.image[i]);
    }

    axios.post("http://localhost:8000/api/images", data)
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            responseMsg: {
              status: response.data.status,
              message: response.data.message,
            },
          });
          setTimeout(() => {
            this.setState({
              image: "",
              responseMsg: "",
            });
          }, 2000);

          document.querySelector("#imageForm").reset();
          // getting uploaded images
          this.refs.child.getImages();
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }

    render() {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-xl-6 col-lg-8 col-md-8 col-sm-12 m-auto">
            <form onSubmit={this.submitHandler} encType="multipart/form-data" id="imageForm">
              <div className="card shadow">
                {this.state.responseMsg.status === "successs" ? (
                  <div className="alert alert-success">
                    {this.state.responseMsg.message}
                  </div>
                ) : this.state.responseMsg.status === "failed" ? (
                  <div className="alert alert-danger">
                    {this.state.responseMsg.message}
                  </div>
                ) : (
                  ""
                )}
                <div className="card-header">
                  <h4 className="card-title fw-bold">
                    Upload Image in React Using Laravel 8 API
                  </h4>
                </div>

                <div className="card-body">
                  <div className="form-group py-2">
                    <label htmlFor="images">Images</label>
                    <input
                      type="file"
                      name="image"   
                      multiple                   
                      onChange={this.handleChange}
                      className="form-control"
                    />
                    <span className="text-danger">
                      {this.state.responseMsg.error}
                    </span>
                  </div>
                </div>

                <div className="card-footer">
                  <button type="submit" className="btn btn-success">
                    Upload
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <Images ref="child" />
      </div>
    );
  }
}