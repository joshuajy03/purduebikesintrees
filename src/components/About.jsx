import React, { useState, useEffect } from "react";
import './WebPage.css';


function About() {
    return (
        <div className="home">
            <div class="container pt-3 pb-3 my-3">
                <div style={{ textAlign: "left" }} >
                    <h3> About </h3>
                    <p>
                        Purdue Bikes In Trees is a stable website made during the 2021 Hello World Hacakthon at Purdue University.
                        The purpose of the website is to allow Purdue students and faculty to post picture of the bikes in trees on campus.
                        Additionally, it helps people who have lost their bike locate their bike if it is found in a tree.
                        Posts are completely anonymous to protect the privacy of posters.<br />
                        The website is made with ReactJS and uses Firebase for storage. <br />
                        Purdue Bikes In Trees does not condone the theft/crime of bikes. Purdue Bikes In Trees is also not officially affiliated with Purdue University.
                    </p>
                    <h3> Future Features </h3>
                    <p>
                        User Accounts: Although all posts are anonymous, we would like to create accounts where users can keep track of the posts they made.
                        We would also maybe like to make it so that we can match user's bikes to bikes in trees if the user loses their bike.<br /> <br />

                        Automoderation: One of our goals is to create a completely autonomous website that does not need to be moderated by a human.
                        To do this, we are creating an AI to detect if pictures actually contain a bike in a tree.
                        Also, we would also like to implement auto moderation for the description and location inputs. <br /> <br />

                        Mobile App: Hopefully, after the website version fully releases, I can also create an mobile app version for mobile users to more easily access. <br /> <br />

                        <strike>LaunchPad 2021: Hopefully, I am able to continue working on this project with a mentor in LaunchPad.</strike> (RIP Rejected) <br /> <br />
                        There are still many improvements that I can make with this website and hopefully, it will be a project that Purdue students will use in the future. <br />
                    </p>
                    <h3> Credits </h3>
                    <p>
                        Developer: Joshua Yang (jjyang@purdue.edu) <br />
                        Sample Picture Credits: Ethan Buck <br />
                    </p>
                    <h3> Links </h3>
                    <a href="https://github.com/joshuajy03/purduebikesintrees">Github Repository Link</a> <br />
                    <a href="https://www.linkedin.com/in/joshua-yang-588183188/">Linkedin</a>
                    
                </div>
            </div>
        </div>
    );
}

export default About;