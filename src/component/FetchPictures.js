import React from 'react';
import './FetchPictures.css';

const FetchPictures = (props) => {

    function fetchPictures() {
        props.reFetchPictures();
    }
    return (

        <div className="fetchPictures">
            <button className="fetchButton" onClick={fetchPictures}>
                Fetch new pictures
            </button>
        </div>
    )

}

export default FetchPictures;