import * as React from "react";
import Img from "gatsby-image";
import { Image, ProductMain } from "../datatypes/dataTypes";

import "./halfGridMediaContent.scss";

const imageGridStyle = { borderRadius: "5px" };

const getAppropriateImg = (entry: Image) =>
    entry && entry.image ? (
        !entry.image.childImageSharp === "undefined" ? (
            <img
                src={entry.image}
                alt=""
                aria-hidden="true"
                style={imageGridStyle}
            />
        ) : (
            <Img
                style={imageGridStyle}
                sizes={entry.image.childImageSharp.sizes}
                alt={entry.alt}
            />
        )
    ) : null;

interface Props {
    mediaContent: ProductMain;
}

const HalfGridMediaContent: React.SFC<Props> = ({ mediaContent }) => (
    <div className="media-content--half-grid">
        <figure className="media-content__media media-wrapper">
            {getAppropriateImg(mediaContent.image1)}
        </figure>
        <figure className="media-content__media media-wrapper">
            {getAppropriateImg(mediaContent.image2)}
        </figure>
        <figure className="media-content__media media-wrapper">
            {getAppropriateImg(mediaContent.image3)}
        </figure>
    </div>
);

export default HalfGridMediaContent;
