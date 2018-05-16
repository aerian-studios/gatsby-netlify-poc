// NOTE: until I can work out why, this needs to be a *.js file
import * as React from "react";
import Content, { HTMLContent } from "../components/Content";
import { HeroBlock } from "../components/HeroBlock";
import { FullScreenMedia } from "../components/FullScreenMedia";

import { ImageSharp, ImageSharpSizes } from "../datatypes/dataTypes";

interface Props {
    title: string;
    content: React.ReactChildren;
    contentComponent?: React.SFC;
    heroImage: ImageSharpSizes | string;
}

interface graphData {
    data: {
        makrkdownRemark: {
            html: React.ReactChildren;
            frontmatter: {
                title: string;
            };
            heroImage: ImageSharp;
        };
    };
}

export const AboutPageTemplate: React.SFC<Props> = ({
    title,
    content,
    contentComponent,
    heroImage,
}) => {
    const PageContent = contentComponent || Content;

    return (
        <section className="section section--about">
            <HeroBlock>
                {typeof heroImage === "string" ? (
                    <img src={heroImage} alt="" aria-hidden="true" />
                ) : (
                    <FullScreenMedia
                        image={heroImage}
                        altText={title}
                        video=""
                    />
                )}
                <div className="block--hero__content-wrap">
                    <h1 className="block--hero__title">{title}</h1>
                </div>
            </HeroBlock>
            <div className="block--full block layout-grid">
                <PageContent
                    className="section__content media-content--rtf-content media-content"
                    content={content}
                />
            </div>
        </section>
    );
};

const AboutPage: React.SFC<graphData> = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <AboutPageTemplate
            contentComponent={HTMLContent}
            title={post.frontmatter.title}
            content={post.html}
            heroImage={
                typeof post.frontmatter.heroimage === "string"
                    ? post.frontmatter.heroimage
                    : post.frontmatter.heroimage.childImageSharp.sizes
            }
        />
    );
};
export default AboutPage;

export const aboutPageQuery: graphData = graphql`
    query AboutPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                heroimage {
                    childImageSharp {
                        sizes(maxWidth: 1168) {
                            ...GatsbyImageSharpSizes_withWebp
                        }
                    }
                }
            }
        }
    }
`;
