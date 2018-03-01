// NOTE: until I can work out why, this needs to be a *.js file
import * as React from "react";
import Helmet from "react-helmet";
import Content, { HTMLContent } from "../components/Content";

import { IBlogData } from "../datatypes/dataTypes";

interface Props {
  content: React.DOMElement<any, any>;
  contentComponent: React.SFC;
  description: string;
  helmet: any;
  title: string;
}

export const BlogPostTemplate: React.SFC<Props> = ({
  content,
  contentComponent,
  description,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
          </div>
        </div>
      </div>
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
      }
    }
  }
`;
