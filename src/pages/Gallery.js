import React, { useEffect, useState } from 'react';
import PicturePresenter from '../component/PicturePresenter';
import FetchPictures from '../component/FetchPictures';
import SearchBox from '../component/SearchBox';
import GrayscaleVersion from '../component/GrayscaleVersion';
import './Gallery.css';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const getPicture = async () => {
    const randomSeed = getRandomInt(10000)
    const pictureUrl = "https://picsum.photos/seed/" + randomSeed + "/300";

    const pictureFullUrlResponse = await fetch(pictureUrl);
    const pictureFullUrl = pictureFullUrlResponse.url;
    const urlAsArray = pictureFullUrl.split("/");
    const pictureId = urlAsArray[4];

    const pictureDataResponse = await fetch("https://picsum.photos/id/" + pictureId + "/info");
    const pictureData = await pictureDataResponse.json();
    const pictureAuthor = pictureData.author;
    return { url: pictureUrl, author: pictureAuthor };
}

export default function Gallery() {
    const [picturesSrc, setPicturesSrc] = useState([]);
    const [storedPicturesSrc, setStoredPicturesSrc] = useState(picturesSrc);

    const setPicturesSrcState = async () => {
        let picturesSrcArray = [];
        for (let index = 0; index < 30; index++) {
            const pictureData = await getPicture();
            picturesSrcArray.push(pictureData)
        }
        setPicturesSrc(picturesSrcArray);
        setStoredPicturesSrc(picturesSrcArray);
    }

    useEffect(() => {
        // set the pictures on first render only
        setPicturesSrcState();


    }, []);

    return (
        <div className="gallery">
            <div className="header">
                <SearchBox
                    picturesUrl={picturesSrc}
                    setPicturesSrc={setPicturesSrc}
                    storedPictures={storedPicturesSrc}
                />
                <FetchPictures
                    reFetchPictures={setPicturesSrcState}
                />
                <GrayscaleVersion
                    picturesUrl={picturesSrc}
                    setPicturesSrc={setPicturesSrc}
                />
            </div>
            <div className="pictureGrid">
                {picturesSrc.length === 0 ? <label className="loading">loading pictures...</label> : picturesSrc.map((pictureSrc, index) =>
                    <PicturePresenter
                        key={index}
                        pictureSrc={pictureSrc.url}
                        pictureAuthor={pictureSrc.author}
                    />
                )}
            </div>
        </div>
    )
}

