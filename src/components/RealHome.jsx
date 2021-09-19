import React, { useState, useEffect } from "react";
import './WebPage.css';
import whitebike from "../whitebike.jpg";
import turquoisebike from "../turquoisebike.jpg";
import lightbluebike from "../lightbluebike.jpg";
import yellowbike from "../yellowbike.jpg";
import storage from '../firebase/firebase';



function RealHome() {


    var storageRef = storage.ref();
    var listRef = storageRef.child('images');

    const [data, setData] = useState([]);
    const [url, setUrl] = useState([]);


    function listItem() {
        storage.ref().child('images/').listAll()
            .then(res => {
                res.items.forEach((item) => {
                    item.getDownloadURL().then((e) => {
                        setUrl(arr => [...arr, e]);
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
            <div class="postcontainer pt-3 pb-3 my-3">
                <div class="row align-items-center">
                    <h4>Turquoise Bike [McCutcheon Hall] [09/18/2021]</h4>
                    <img src={turquoisebike} class="postimage" />
                </div>
            </div>

            {
                url.map((val) => (
                    <div class="postcontainer pt-3 pb-3 my-3">
                        <div class="row align-items-center">
                            <img key={{ val }} src={{ val }} class="postimage" />
                            <h2>{val}</h2>
                        </div>
                    </div>

                ))
            }

        </div>
    );

}

export default RealHome;