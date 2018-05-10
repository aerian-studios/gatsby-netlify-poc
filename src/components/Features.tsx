import * as React from "react";
import Img from "gatsby-image";

import { IProductIntro } from "../datatypes/dataTypes";
import "./features.scss";

interface Props {
    gridItems: IProductIntro;
}
const FeatureGrid: React.SFC<Props> = ({ gridItems }) => (
    <div className="group group--pair">
        {gridItems.blurbs.map((item) => (
            <div
                className="group__item group--pair__item card--product media-content"
                key={item.image.childImageSharp.sizes.src}
            >
                <figure className="media-content__media">
                    <Img alt="" sizes={item.image.childImageSharp.sizes} />
                </figure>
                <p className="media-content__content">{item.text}</p>
            </div>
        ))}
    </div>
);

export default FeatureGrid;
