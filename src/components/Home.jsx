import React, { useState, useEffect } from "react";
import './WebPage.css';
import UploadImages from "./image-upload.component.js";
import whitebike from "../whitebike.jpg";
import turquoisebike from "../turquoisebike.jpg";
import lightbluebike from "../lightbluebike.jpg";
import yellowbike from "../yellowbike.jpg";


function Home() {
  return (
    <div className="home">
      <div class="postcontainer pt-3 pb-3 my-3">
        <div class="row align-items-center">
            <h4>Turquoise Bike [McCutcheon Hall] [09/18/2021]</h4>
            <img src={turquoisebike} class="postimage"/>
        </div>
      </div>

      <div class="postcontainer pt-3 pb-3 my-3">
        <div class="row align-items-center">
            <h4>Whike Bike [McCutcheon Hall] [09/17/2021]</h4>
            <img src={whitebike} class="postimage"/>
        </div>
      </div>

      <div class="postcontainer pt-3 pb-3 my-3">
        <div class="row align-items-center">
            <h4>Yellow Bike [Somewhere] [09/16/2021]</h4>
            <img src={yellowbike} class="postimage"/>
        </div>
      </div>

      <div class="postcontainer pt-3 pb-3 my-3">
        <div class="row align-items-center">
            <h4>Light Blue Bike [Somewhere] [09/15/2021]</h4>
            <img src={lightbluebike} class="postimage"/>
        </div>
      </div>

      
    </div>
  );
}

export default Home;