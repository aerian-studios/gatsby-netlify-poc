import * as React from "react";
import Link from "gatsby-link";
import { HeroBlock } from "../components/HeroBlock";
import { FullScreenMedia } from "../components/FullScreenMedia";

// import "../scss/base-theme.scss";

interface Props {
  data: Data;
}

export default class IndexPage extends React.Component<Props> {
  render() {
    const { data } = this.props;

    if (data) {
      const { edges: posts } = data.allMarkdownRemark;
      return (
        <main className="layout-grid">
          <HeroBlock>
            <FullScreenMedia video="/img/687898845.mp4" />
            <h1>Latest Stories</h1>
          </HeroBlock>
          <section className="block card-grid">
            {posts
              .filter(post => post.node.frontmatter.templateKey === "blog-post")
              .map(({ node: post }) => (
                <div className="card" key={post.id}>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    <div className="card__content">
                      <h2 className="card__title">
                        {post.frontmatter.title}

                        <span> &bull; </span>
                        <small>{post.frontmatter.date}</small>
                      </h2>
                      <p>
                        {post.excerpt}
                        Keep Reading →
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
          </section>
        </main>
      );
    }

    return <main className="layout-grid" />;
  }
}

interface FrontMatter {
  title: string;
  templateKey: string;
  date: string;
  heroimage: string;
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
