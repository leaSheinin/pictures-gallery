import React from 'react';
import SearchField from "react-search-field";


const SearchBox = (props) => {
    const picturesUrl = props.picturesUrl;
    const newPictureAuthor = [];

    const searchByAuthor = (textSearch) => {

        if (textSearch === "") {
            props.setPicturesSrc(props.storedPictures);
        } else {
            picturesUrl.forEach(pictureUrl => {
                if (pictureUrl.author !== undefined) {
                    if (pictureUrl.author.includes(textSearch)) {
                        newPictureAuthor.push(pictureUrl);
                    }
                }
            });
            if (newPictureAuthor.length === 0) {
                props.setPicturesSrc(props.storedPictures);
            } else {
                props.setPicturesSrc(newPictureAuthor);
            }
        }
    }

    return (
        <div className="searchBox">
            <SearchField
                placeholder="search..."
                onChange={searchByAuthor}
                classNames="searchFeild"
            ></SearchField>
        </div>
    )

}

export default SearchBox;