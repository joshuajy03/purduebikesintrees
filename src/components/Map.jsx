import React, { useState, useEffect } from "react";
import './WebPage.css';



function Map() {
    var mapMinHeight = window.innerHeight * 0.8;
    return (
        <div className="home">
            <div class="container pt-3 pb-3 my-3">
                <div class="row align-items-center">
                    <iframe
                        width="90%"
                        height={mapMinHeight}
                        className="map"
                        loading="lazy"
                        allowfullscreen
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCtb3f0glg8i6LcX-Rwj8BTMHOaiS920fU
          &q=Purdue+University">
                    </iframe>
                </div>
            </div>


        </div>
    );
}

export default Map;