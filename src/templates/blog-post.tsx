// NOTE: until I can work out why, this needs to be a *.js file
import * as React from "react";
import Helmet from "react-helmet";
import Content, { HTMLContent } from "../components/Content";

import { IBlogData } from "../datatypes/dataTypes";
import { HeroBlock } from "../components/HeroBlock";
import { FullScreenImage } from "../components/FullScreenImage";

interface Props {
  content: React.ReactNode | React.ReactChildren;
  contentComponent: React.SFC;
  description: string;
  helmet: any;
  title: string;
  heroimage: string;
}

export const BlogPostTemplate: React.SFC<Props> = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  heroimage
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section section--blog">
      {helmet || ""}
      <HeroBlock>
        <FullScreenImage image={heroimage} altText={description} />
        <div className="block--hero__content">
          <h1 clasName="block--hero__title">{title}</h1>
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

const Blog: React.SFC<IBlogData> = props => {
  const { markdownRemark: post } = props.data;

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
      title={post.frontmatter.title}
      heroimage={post.frontmatter.heroimage}
    />
  );
};

export default Blog;

export const pageQuery: IBlogData = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        heroimage
      }
    }
  }
`;
