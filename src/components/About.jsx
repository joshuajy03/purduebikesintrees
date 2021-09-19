import React, { useState, useEffect } from "react";
import './WebPage.css';
import UploadImages from "./image-upload.component.js";


function About() {
    return (
        <div className="home">
            <div class="container pt-3 pb-3 my-3">
                <div style={{ textAlign: "left" }} >
                    <h3> About </h3>
                    <p>
                        Purdue Bikes In Trees is a demo website made during the 2021 Hello World Hacakthon at Purdue University.
                        The purpose of the website is to allow Purdue students and faculty to post picture of the bikes in trees on campus.
                        Additionally, it helps people who have lost their bike locate their bike if it is found in a tree.
                        Posts are completely anonymous to protect the privacy of posters.<br />
                        The website is made with ReactJS and uses Firebase.
                    </p>
                    <h3> Future Features </h3>
                    <p>
                        User Accounts: Although all posts are anonymous, we would like to create accounts where users can keep track of the posts they made.
                        We would also maybe like to make it so that we can match user's bikes to bikes in trees if the user loses their bike.<br/>

                        Automoderation: One of our goals is to create a completely autonomous website that does not need to be moderated by a human.
                        To do this, we are creating an AI to detect if pictures actually contain a bike in a tree. 
                        Also, we would also like to implement auto moderation for the description and location inputs. <br />
                    </p>
                    <h3> Credits </h3>
                    <p>
                        Developer: Joshua Yang <br />
                        Picture Credits: Ethan Buck <br />
                    </p>
                    <h3> GitHub </h3>
                    <a href="https://github.com/joshuajy03/purduebikesintrees" >Github Repository Link</a>
                </div>
            </div>
        </div>
    );
}

export default About;