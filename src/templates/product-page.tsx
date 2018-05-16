// NOTE: until I can work out why, this needs to be a *.js file
import * as React from "react";
import Img from "gatsby-image";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import {
    IProductData,
    ProductFrontmatter,
    ProductFrontmatterProps,
    ImageSharp,
    Image,
} from "../datatypes/dataTypes";

import { HeroBlock } from "../components/HeroBlock";
import { FullScreenMedia } from "../components/FullScreenMedia";

const imageGridStyle = { borderRadius: "5px" };

const getAppropriateImg = (entry: Image) =>
    entry && entry.image ? (
        typeof entry.image === "string" ? (
            <img
                src={entry.image}
                alt=""
                aria-hidden="true"
                style={imageGridStyle}
            />
        ) : (
            <Img
                style={imageGridStyle}
                sizes={entry.image.childImageSharp.sizes}
                alt={entry.alt}
            />
        )
    ) : null;
export const ProductPageTemplate: React.SFC<ProductFrontmatterProps> = ({
    heroImage,
    title,
    heading,
    description,
    intro,
    main,
    testimonials,
    full_image,
    pricing,
}) => (
    <section className="section section--product">
        <HeroBlock>
            {typeof heroImage === "string" ? (
                // Cover the situation where there is no imageSharp (e.g. in the cms)
                <img
                    className="full-screen"
                    src={heroImage}
                    alt=""
                    aria-hidden="true"
                />
            ) : (
                <FullScreenMedia
                    image={heroImage}
                    altText=""
                    video=""
                    aria-hidden="true"
                />
            )}
            <div className="block--hero__content">
                <h1 className="block--hero__title">{title}</h1>
                <p>{description}</p>
            </div>
        </HeroBlock>
        <div className="layout-grid">
            <section className="block block--_skin">
                <Features gridItems={intro} />
            </section>

            <section className="block block--centred block--_skin">
                <div className="section__content content-wrap">
                    <h2 className="section-title">{main.heading}</h2>
                    <p>{main.description}</p>
                </div>
                <div className="media-content--half-grid">
                    <figure className="media-content__media media-wrapper">
                        {getAppropriateImg(main.image1)}
                    </figure>
                    <figure className="media-content__media media-wrapper">
                        {getAppropriateImg(main.image2)}
                    </figure>
                    <figure className="media-content__media media-wrapper">
                        {getAppropriateImg(main.image3)}
                    </figure>
                </div>
            </section>

            <Testimonials testimonials={testimonials} />
            <section className="block--full layout-grid block block--dark_skin">
                {typeof full_image === "string" ? (
                    // Cover the situation where there is no imageSharp (e.g. in the cms)
                    <img
                        src={full_image}
                        alt=""
                        aria-hidden="true"
                        className="block--full"
                    />
                ) : (
                    <FullScreenMedia
                        image={full_image}
                        altText=""
                        wrapperClassName="block--full"
                    />
                )}
                <div className="section__content content-wrap">
                    <h2 className="section-title">{pricing.heading}</h2>
                    <p className="is-size-5">{pricing.description}</p>
                </div>
                <Pricing data={pricing.plans} />
            </section>
        </div>
    </section>
);

const ProductPage: React.SFC<IProductData> = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <ProductPageTemplate
            heroImage={
                typeof frontmatter.image === "string"
                    ? frontmatter.image
                    : frontmatter.image.childImageSharp.sizes
            }
            title={frontmatter.title}
            heading={frontmatter.heading}
            description={frontmatter.description}
            intro={frontmatter.intro}
            main={frontmatter.main}
            testimonials={frontmatter.testimonials}
            full_image={
                typeof frontmatter.full_image === "string"
                    ? frontmatter.full_image
                    : frontmatter.full_image.childImageSharp.sizes
            }
            pricing={frontmatter.pricing}
        />
    );
};

export default ProductPage;

export const productPageQuery: IProductData = graphql`
    query ProductPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                image {
                    childImageSharp {
                        sizes(maxWidth: 1168) {
                            ...GatsbyImageSharpSizes_withWebp
                        }
                    }
                }
                heading
                description
                intro {
                    blurbs {
                        image {
                            childImageSharp {
                                sizes(maxWidth: 256) {
                                    ...GatsbyImageSharpSizes_withWebp_tracedSVG
                                }
                            }
                        }
                        text
                    }
                    heading
                    description
                }
                main {
                    heading
                    description
                    image1 {
                        alt
                        image {
                            childImageSharp {
                                sizes(maxWidth: 892) {
                                    ...GatsbyImageSharpSizes_withWebp
                                }
                            }
                        }
                    }
                    image2 {
                        alt
                        image {
                            childImageSharp {
                                sizes(maxWidth: 892) {
                                    ...GatsbyImageSharpSizes_withWebp
                                }
                            }
                        }
                    }
                    image3 {
                        alt
                        image {
                            childImageSharp {
                                sizes(maxWidth: 892) {
                                    ...GatsbyImageSharpSizes_withWebp
                                }
                            }
                        }
                    }
                }
                testimonials {
                    author
                    quote
                }
                full_image {
                    childImageSharp {
                        sizes(maxWidth: 1168) {
                            ...GatsbyImageSharpSizes_withWebp
                        }
                    }
                }
                pricing {
                    heading
                    description
                    plans {
                        description
                        items
                        plan
                        price
                    }
                }
            }
        }
    }
`;
