import * as React from "react";

import "./fullScreenMedia.scss";

interface Props {
    image?: string | null;
    altText: string | null;
    video?: string | null;
}

//@TODO: make into responsive/multi-source
export const FullScreenMedia: React.SFC<Props> = ({
    image,
    altText,
    video,
}) => (
    <figure className="full-screen">
        {video ? (
            <video
                preload="auto"
                className="media-video"
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
            >
                <source src={video} type="video/mp4" />
            </video>
        ) : (
            <img src={image} alt={altText} />
        )}
    </figure>
);
