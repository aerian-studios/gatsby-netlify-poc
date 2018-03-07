import * as React from "react";
import Link from "gatsby-link";

// import "../scss/base-theme.scss";

interface Props {
  data: Data;
}

export default class IndexPage extends React.Component<Props> {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <main className="layout-grid">
        <header className="block--hero_skin block--full block">
          <h1>Latest Stories</h1>
        </header>
        {posts
          .filter(post => post.node.frontmatter.templateKey === "blog-post")
          .map(({ node: post }) => (
            <div
              className="content"
              style={{ border: "1px solid #eaecee", padding: "2em 4em" }}
              key={post.id}
            >
              <p>
                <Link className="has-text-primary" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
                <span> &bull; </span>
                <small>{post.frontmatter.date}</small>
              </p>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className="button is-small" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </p>
            </div>
          ))}
      </main>
    );
  }
}

interface FrontMatter {
  title: string;
  templateKey: string;
  date: string;
}

interface GNode {
  excerpt: string;
  id: string;
  fields: {
    slug: string;
  };
  frontmatter: FrontMatter;
}

interface Data {
  allMarkdownRemark: {
    edges: Array<{
      node: GNode;
    }>;
  };
}

export const pageQuery: Data = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
