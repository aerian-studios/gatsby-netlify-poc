// NOTE: until I can work out why, this needs to be a *.js file
import * as React from "react";
import Helmet from "react-helmet";
import Content, { HTMLContent } from "../components/Content";

import { BlogData, ImageSharpSizes } from "../datatypes/dataTypes";
import { HeroBlock } from "../components/HeroBlock";
import { FullScreenMedia } from "../components/FullScreenMedia";

interface Props {
    content: React.ReactNode | React.ReactChildren;
    contentComponent: React.SFC;
    description: string;
    helmet: any;
    title: string;
    heroimage: ImageSharpSizes;
}

export const BlogPostTemplate: React.SFC<Props> = ({
    content,
    contentComponent,
    description,
    title,
    helmet,
    heroimage,
}) => {
    const PostContent = contentComponent || Content;

    return (
        <section className="section section--blog">
            {helmet || ""}
            <HeroBlock>
                <FullScreenMedia image={heroimage} altText={description} />
                <div className="block--hero__content">
                    <h1 className="block--hero__title">{title}</h1>
                    <p>{description}</p>
                </div>
            </HeroBlock>
            <PostContent
                content={content}
                className="block--full block layout-grid"
            />
        </section>
    );
};

const Blog: React.SFC<BlogData> = (props) => {
    const { markdownRemark: post } = props.data;

    return (
        <BlogPostTemplate
            content={post.html}
            contentComponent={HTMLContent}
            description={post.frontmatter.description}
            helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
            title={post.frontmatter.title}
            heroimage={post.frontmatter.heroimage.childImageSharp.sizes}
        />
    );
};

export default Blog;

export const pageQuery: BlogData = graphql`
    query BlogPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                heroimage {
                    childImageSharp {
                        sizes(
                            maxWidth: 1168
                            duotone: { highlight: "#f3a834", shadow: "#1b070e" }
                        ) {
                            ...GatsbyImageSharpSizes_withWebp
                        }
                    }
                }
            }
        }
    }
`;
