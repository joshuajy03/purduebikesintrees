import React, { useState, useEffect } from "react";
import './WebPage.css';
import storage from '../firebase/firebase';


function Post() {
    const [image, setImage] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');



    const upload = () => {
        if (image == null)
            return;

        let myCurrentDate = new Date();
        let day = myCurrentDate.getDate();
        let month = myCurrentDate.getMonth() + 1;
        let year = myCurrentDate.getFullYear();

        const date = month + "/" + day + "/" + year;

        var newMetadata = {
            customMetadata: {
                'location': location,
                'description': description,
                'date': date
            }
        };

        // Delete the metadata property

        const promises = [];
        const uploadTask = storage.ref(`/images/${image.name}`).put(image);
        promises.push(uploadTask);
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        }, error => { console.log(error) }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                console.log(downloadURL);
            });
        });

        Promise.all(promises).then(tasks => {
            alert("upload");
            var storageRef = storage.ref();
            var imageRef = storageRef.child(`images/${image.name}`);

            imageRef.updateMetadata(newMetadata)
                .then((metadata) => {
                    // metadata.contentType should be null
                }).catch((error) => {
                    // Uh-oh, an error occurred!
                    alert(error)
                });
        });
    }


    return (
        <div className="home">
            <div class="container pt-3 pb-3 my-3">
                <div class="row align-items-center my-5">
                    <form onSubmit={upload}>
                        <h4>
                            Description: &nbsp;
                            <input type="text" onChange={(e) => { setDescription(e.target.value) }} />
                        </h4>
                        &nbsp;
                        <h4>
                            Location: &nbsp;
                            <input type="text" onChange={(e) => { setLocation(e.target.value) }} />
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