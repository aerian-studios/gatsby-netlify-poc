import * as React from "react";

import "./fullScreenImage.scss";

interface Props {
  image: string;
  altText: string;
}

//@TODO: make into responsive image
export const FullScreenImage: React.SFC<Props> = ({ image, altText }) => (
  <figure className="full-screen">
    <img src={image} alt={altText} />
  </figure>
);
