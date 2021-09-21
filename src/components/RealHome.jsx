import React, { useState, useEffect } from "react";
import './WebPage.css';
import storage from '../firebase/firebase';



function RealHome() {


    var storageRef = storage.ref();
    var listRef = storageRef.child('images');


    const [images, setImages] = useState([])


    function listItem() {
        storage.ref().child('images/').listAll()
            .then(res => {
                res.items.forEach((item) => {
                    item.getDownloadURL().then((e) => {
                        item.getMetadata().then((f) => {
                            setImages(arr => [...arr, {url: e,
                                date: f.customMetadata.date,
                                loc: f.customMetadata.location,
                                des: f.customMetadata.description
                            }]);
                        })
                        
                    })
                    

                })
            })
            .catch(err => {
                alert(err.message);
            })

    }

    useEffect(() => {
        listItem();
    }, []);

    return (
        <div className="home">
            {
                images.map((val) => (
                    <div class="postcontainer pt-3 pb-3 my-3">
                        <div class="row align-items-center">
                            {  
                                <h4>{val.des} [{val.loc}] [{val.date}]</h4>
                            }
                            <img alt={val.url} src={val.url} onload={console.log(val)} class="postimage" />
                            
                        </div>
                    </div>

                ))
            }

        </div>
    );

}

export default RealHome;