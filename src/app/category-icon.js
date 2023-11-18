import React, { useEffect, useState } from "react";
import '../css/category-icons.css';

const CategoryIcon = ({ category }) => {
    const [imgUrl, setImgUrl] = useState('');

    useEffect(() => {
        let imgUrl = '';

        switch (category) {
            case "Music":
                imgUrl = '/icons/music.png';
                break;

            case "Sport & Leisure":
                imgUrl = '/icons/sports.png';
                break;

            case "Film & TV":
                imgUrl = '/icons/television.png';
                break;

            case "Arts & Literature":
                imgUrl = '/icons/art.png';
                break;

            case "History":
                imgUrl = '/icons/history.png';
                break;
            case "Society & Culture":
                imgUrl = '/icons/society.png';
                break;

            case "Science":
                imgUrl = '/icons/science.png';
                break;

            case "Geography":
                imgUrl = '/icons/geography.png';
                break;

            case "Food & Drink":
                imgUrl = '/icons/food.png';
                break;

            case "General Knowledge":
                imgUrl = '/icons/knowledge.png';
                break;

            default:
                imgUrl = '';
        }

        setImgUrl(imgUrl);
    }, [category]);

    return (
        <div className="category-icon-container">
            <img className="category-icon" src={imgUrl} />
        </div>
    );
};

export default CategoryIcon;
