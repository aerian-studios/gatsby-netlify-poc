// NOTE: until I can work out why, this needs to be a *.js file
import * as React from "react";
import Content, { HTMLContent } from "../components/Content";
import { HeroBlock } from "../components/HeroBlock";
import { FullScreenMedia } from "../components/FullScreenMedia";

export const AboutPageTemplate = ({
    title,
    content,
    contentComponent,
    heroimage,
}) => {
    const PageContent = contentComponent || Content;

    return (
        <section className="section section--about">
            <HeroBlock>
                <FullScreenMedia image={heroimage} altText={title} video="" />
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

export default ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <AboutPageTemplate
            contentComponent={HTMLContent}
            title={post.frontmatter.title}
            content={post.html}
            heroimage={post.frontmatter.heroimage}
        />
    );
};

export const aboutPageQuery = graphql`
    query AboutPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                heroimage
            }
        }
    }
`;
