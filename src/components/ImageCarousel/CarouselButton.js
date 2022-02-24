import React from "react";
import "./ImageCarousel.css";
import leftArrow from "./icons/Left Arrow.svg";
import rightArrow from "./icons/Right Arrow.svg";

export default function CarouselButton({ direction, slideImage }) {
    return (
        <button
            onClick={slideImage}
            className={direction === "next" ? "image-slide next" : "image-slide prev"}
        >
            <img src={direction === "next" ? rightArrow : leftArrow} alt='' />
        </button>
    );
}