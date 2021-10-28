import React, { useState, useEffect } from 'react';
import './GrayscaleVersion.css';

const GrayscaleVersion = (props) => {
    const [checked, setChecked] = useState(false);
    const picturesUrl = props.picturesUrl;

    useEffect(() => {
        if (checked) {
            const newPictures = picturesUrl.map(pictureUrl => ({ url: pictureUrl.url + "?grayscale", author: pictureUrl.author }));
            props.setPicturesSrc(newPictures);
        } else {
            const newPictures = picturesUrl.map(pictureUrl => ({ url: pictureUrl.url.substr(0, pictureUrl.url.indexOf('?')), author: pictureUrl.author }));
            props.setPicturesSrc(newPictures);
        }
    }, [checked]);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div className="grayscaleVersion">
            <label className="grayscaleLabel">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                Grayscale Version
            </label>
        </div>
    );
}

export default GrayscaleVersion;