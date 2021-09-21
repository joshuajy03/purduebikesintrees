import React, { useState, useEffect } from "react";
import './WebPage.css';
import storage from '../firebase/firebase';



function RealHome() {


    var storageRef = storage.ref();
    var listRef = storageRef.child('images');


    const [images, setImages] = useState([]);

    var list = [];

    function listItem() {
        storage.ref().child('images/').listAll()
            .then(res => {
                res.items.forEach((item) => {
                    item.getDownloadURL().then((e) => {
                        item.getMetadata().then((f) => {
                            setImages(arr => [...arr, {
                                url: e,
                                des: f.customMetadata.description,
                                date: f.customMetadata.date,
                                loc: f.customMetadata.location,
                                dateObj: f.customMetadata.dateObj
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
        list.sort(function (a, b) {
            return ((a.dateObj > b.dateObj) ? -1 : ((a.Obj == b.Obj) ? 0 : 1));
        });
        setImages(list);
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