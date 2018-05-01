import * as React from "react";

import { IProductIntro } from "../datatypes/dataTypes";

interface Props {
  gridItems: IProductIntro;
}
const FeatureGrid: React.SFC<Props> = ({ gridItems }) => (
  <div className="card-grid">
    {gridItems.blurbs.map(item => (
      <div className="card card--product media-content" key={item.image}>
        <figure className="media-content__media">
          <img alt="" src={item.image} />
        </figure>
        <p className="media-content__content">{item.text}</p>
      </div>
    ))}
  </div>
);

export default FeatureGrid;
