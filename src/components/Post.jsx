import React, { useState, useEffect } from "react";
import './WebPage.css';
import UploadImages from "./image-upload.component.js";


function Post() {
    return (
        <div className="home">
            <div class="container pt-3 pb-3 my-3">
                <div class="row align-items-center my-5">
                    <form >
                        <h4>
                            Description: &nbsp;
                            <input type="text" />
                        </h4>
                        &nbsp;
                        <h4>
                            Location: &nbsp;
                            <input type="text" />
                        </h4>

                        <div className="content">
                            <h4>Upload Your Image</h4>
                            <UploadImages />
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Post;