import React, { Component } from "react";
import UploadService from "../services/file-upload.service";

export default class UploadImages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFile: undefined,
      previewImage: undefined,
      progress: 0,
      message: "",

      imageInfos: [],
    };
  }

  selectFile = (event) => {
    this.setState({
      currentFile: event.target.files[0],
      previewImage: URL.createObjectURL(event.target.files[0]),
      progress: 0,
      message: ""
    });
  }

  upload = () => {
    this.setState({
      progress: 0,
    });

    UploadService.upload(this.state.currentFile, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        this.setState({
          message: response.data.message,
        });
        return UploadService.getFiles();
      })
      .then((files) => {
        this.setState({
          imageInfos: files.data,
        });
      })
      .catch((err) => {
        this.setState({
          progress: 0,
          message: "Could not upload the image!",
          currentFile: undefined,
        });
      });
  }

  componentDidMount = () => {
    UploadService.getFiles().then((response) => {
      this.setState({
        imageInfos: response.data,
      });
    });
  }

  render() {
    const {
      currentFile,
      previewImage,
      progress,
      message,
      imageInfos,
    } = this.state;

    

    return (
      <div>
        <div className="row">
          <div className="col-8">
            <label className="btn btn-default p-0">
              <input type="file" accept="image/*" onChange={this.selectFile} />
            </label>
          </div>
          {/* 
          <div className="col-4">
            <button
              className="btn btn-success btn-sm"
              disabled={!currentFile}
              onClick={this.upload}
            >
              Upload
            </button>
          </div>
          */}
        </div>


        {previewImage && (
          <div>
            <img className="preview" src={previewImage} alt="" />
          </div>
        )}

        {message && (
          <div className="alert alert-secondary mt-3" role="alert">
            {message}
          </div>
        )}

      
      </div>
    );
  }
}