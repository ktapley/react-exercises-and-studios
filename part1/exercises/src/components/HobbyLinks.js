import React from 'react';
import classes from './HobbiesList.module.css';

class HobbyLinks extends React.Component {
    render() {
        const hobbyLinks = ["https://www.birdwatching-bliss.com/bird-watching-gear-resources.html", "https://www.travelandleisure.com/trip-ideas/adventure-travel/best-hiking-gear"];
        return (
            <div>
                <h3 className = {classes.hobbyHeading}>Links For My Hobbies</h3>

                <a className='hobby' href={hobbyLinks[0]}>Best Gear For Bird Watching</a><br/>
                <a className='hobby' href={hobbyLinks[1]}>Best Gear For Hiking</a>

            </div>
        );
    }
}

export default HobbyLinks;