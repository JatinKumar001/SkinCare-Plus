import React, { useState } from 'react';
import "../Styles/ImagePredection.css";
import axios from 'axios';

export default function ImagePredection() {
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [prediction, setPrediction] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
        setImagePreview(URL.createObjectURL(file));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        if (!imageFile) {
            alert("Please select an image first.");
            return;
        }
        const formData = new FormData();
        formData.append('file', imageFile);

        try {
            const response = await axios.post("http://localhost:8080/api/prediction", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setPrediction(response.data);
        } catch (error) {
            console.error("There was an error making the request:", error);
        }
    };

    return (
        <div className="prediction-section" id="service">
            <div className="prediction-title-content">
                <h3 className="info-title">
                    <span>Analyse Your Skin</span>
                </h3>
            </div>
            <form className="prediction-content" onSubmit={handleClick}>
                <label>
                    Select Image:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </label>
                <div className="prediction-container">
                    <div className="prediction-image-container">
                        {imagePreview && <img src={imagePreview} alt="Selected" className="prediction-image" />}
                    </div>
                </div>
                <div className="prediction-btn">
                    <button type="submit">Analyse</button>
                </div>
            </form>

            {prediction && (
                <div className='prediction-result'>
                    <p className='prediction-result-heading'>Prediction Result :</p>
                    <p className='prediction-ans'>{prediction}</p>
                </div>
            )}
        </div>
    );
}
