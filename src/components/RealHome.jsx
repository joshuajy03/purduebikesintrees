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
    const [des, setDes] = useState([]);
    const [loc, setLoc] = useState([]);
    const [date, setDate] = useState([]);


    function listItem() {
        storage.ref().child('images/').listAll()
            .then(res => {
                res.items.forEach((item) => {
                    item.getDownloadURL().then((e) => {
                        setUrl(arr => [...arr, e]);
                        
                    })
                    item.getMetadata().then((f) => {
                        setDes(arr => [...arr, f.customMetadata.description]);
                        console.log(f);
                        setLoc(arr => [...arr, f.customMetadata.location]);
                        setDate(arr => [...arr, f.customMetadata.date]);
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
                url.map((val, index) => (
                    <div class="postcontainer pt-3 pb-3 my-3">
                        <div class="row align-items-center">
                            {  
                                <h4>{des[index]} [{loc[index]}] [{date[index]}]</h4>
                            }
                            <img alt={val} src={val} onLoad={console.log(val)} class="postimage" />
                            
                        </div>
                    </div>

                ))
            }

        </div>
    );

}

export default RealHome;