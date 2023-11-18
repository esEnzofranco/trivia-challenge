import React from "react";
import '../css/loading-component.css';

const LoadingComponent = () => {
    return(
        <div className="loading-container">
            <img className="loading-object" src="/icons/loading.png" />
        </div>
    )
}

export default LoadingComponent;