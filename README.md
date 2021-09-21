# Purdue Bikes In Trees (PBIT)

## Inspiration
Walking around Purdue's campus, especially during BGR, there was a spectacle of bikes in trees. This was completely new to me as I had never seen a bike in a tree before coming to campus.
 
## What it does
This project is a website that allows you to upload images of bikes in trees through the "Post" page. The website allows you to input the location and description of the picture. Also, the website will automatically store the date the picture was uploaded. The website then stores these as metadata in the picture for use in the "Home" page where users can see all the bikes that have been posted recently. All posts are anonymous to protect the privacy of posters, but the moderator can manually delete irrelevant/inaproriate posts from the Firebase storage.

## How I built it
I created the frontend with ReactJS and used Firebase to store the images. ReactJS uses react-router-dom to navigate through pages. I also wrote a program for dealing with smaller devices, like phones, which will implement a drawer in the navigation bar. Finally, I used Firebase to store the images that get uploaded. The image gets uploaded to Firebase. Once the image gets completely uploaded, the metadata is added to the image. Then, when the home page is refreshed, the new post will be visible.

## Challenges we ran into
The biggest challenge I had with this project was implementing the Firebase storage. It was my first time using any type of database/storage. What was most frustrating was that most of the tutorials and guides that I found for Firebase were outdated (used an older deprecated version). This led me on a kind of long wild goose chase, which took up much of my time. Additionally, while I fully implemented the image download that stores the metadata along with the image in Firebase, I did not completely finish getting the pictures from Firebase to post onto the homepage. This was because there is a problem where the <img> renders before I am able to get the download URL for the image, so the image does not appear. However, there is currently a dummy hardcoded home page for demonstration purposes.

## Accomplishments that we're proud of
The biggest accomplishment is that I was able to create a semi-working website within such a short amount of time. My previous website project took over three months did not even include any storage/database systems.

## What we learned
The most that I learned was how to connect React websites to Firebase. While I have not perfected this craft yet, I have not stopped learning more about how to implement the backend. 

## What's next for Purdue Bikes In Trees (PBIT)
User Accounts: Although all posts are anonymous, we would like to create accounts where users can keep track of the posts they made. We would also maybe like to make it so that we can match user's bikes to bikes in trees if the user loses their bike.

Auto-moderation: One of our goals is to create a completely autonomous website that does not need to be moderated by a human. To do this, we are creating an AI to detect if pictures actually contain a bike in a tree. Also, we would also like to implement auto-moderation for the description and location inputs.

Mobile App: Hopefully, after the website version fully releases, I can also create an mobile app version for mobile users to more easily access.

There are still many improvements that I can make with this website and hopefully, it will be a project that Purdue students will use in the future.
