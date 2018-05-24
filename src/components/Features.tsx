import * as React from "react";
import Img from "gatsby-image";

import { ProductIntro, ImageSharp, isImageSharp } from "../datatypes/dataTypes";
import "./features.scss";

interface Props {
    gridItems: ProductIntro;
}
const FeatureGrid: React.SFC<Props> = ({ gridItems }) => (
    <div className="group group--pair">
        {gridItems.blurbs.map((item) => (
            <div
                className="group__item group--pair__item card--product media-content"
                key={
                    isImageSharp(item.image)
                        ? item.image.childImageSharp.sizes.src
                        : item.image
                }
            >
                <figure className="media-content__media">
                    {isImageSharp(item.image) ? (
                        <Img
                            alt=""
                            sizes={item.image.childImageSharp.sizes}
                            aria-hidden="true"
                        />
                    ) : (
                        <img alt="" src={item.image} aria-hidden="true" />
                    )}
                </figure>
                <p className="media-content__content">{item.text}</p>
            </div>
        ))}
    </div>
);

export default FeatureGrid;
