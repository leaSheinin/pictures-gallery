import React from 'react';
import './PicturePresenter.css';


const PicturePresenter = (props) => {

    const pictureUrl = props.pictureSrc;
    const pictureAuthor = props.pictureAuthor;

    return (
        <div className="picturePresenter">
            <img src={pictureUrl} alt={pictureAuthor}/>
            <div className="div">
                {pictureAuthor}
            </div>
        </div>
    );
}

export default PicturePresenter;