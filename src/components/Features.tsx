import * as React from "react";

import { IProductIntro } from "../datatypes/dataTypes";

interface Props {
  gridItems: IProductIntro;
}
const FeatureGrid: React.SFC<Props> = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.blurbs.map(item => (
      <div key={item.image} className="column is-6">
        <section className="section">
          <p className="has-text-centered">
            <img alt="" src={item.image} />
          </p>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
);

export default FeatureGrid;
