import React, { useState, useEffect } from "react";
import './WebPage.css';
import UploadImages from "./image-upload.component.js";
import storage from '../firebase/firebase';


function Post() {
    const [image, setImage] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    const upload = () => {
        if (image == null)
            return;
        storage.ref(`/images/${image.name}`).put(image)
            .on("state_changed", alert("image uploaded"), alert);
        
    }


    return (
        <div className="home">
            <div class="container pt-3 pb-3 my-3">
                <div class="row align-items-center my-5">
                    <form onSubmit={upload}>
                        <h4>
                            Description: &nbsp;
                            <input type="text" onChange={(e) => { setDescription(e.target.value)} }/>
                        </h4>
                        &nbsp;
                        <h4>
                            Location: &nbsp;
                            <input type="text" onChange={(e) => { setLocation(e.target.value)} }/>
                        </h4>
                        <div className="content">
                            <h4>Upload Your Image</h4>
                            <input type="file" onChange={(e) => { setImage(e.target.files[0]) }} />
                            <input type="submit" value="Submit" />
                            <img src={image} />
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
}

export default Post;