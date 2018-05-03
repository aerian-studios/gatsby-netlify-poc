// NOTE: until I can work out why, this needs to be a *.js file
import * as React from "react";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import { IProductData, IProductFrontmatter } from "../datatypes/dataTypes";

import { HeroBlock } from "../components/HeroBlock";
import { FullScreenMedia } from "../components/FullScreenMedia";

const imageGridStyle = { borderRadius: "5px" };

export const ProductPageTemplate: React.SFC<IProductFrontmatter> = ({
    image,
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
            <FullScreenMedia image={image} altText={description} />
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
                        <img
                            style={imageGridStyle}
                            src={main.image1.image}
                            alt={main.image1.alt}
                        />
                    </figure>
                    <figure className="media-content__media media-wrapper">
                        <img
                            style={imageGridStyle}
                            src={main.image2.image}
                            alt={main.image2.alt}
                        />
                    </figure>
                    <figure className="media-content__media media-wrapper">
                        <img
                            style={imageGridStyle}
                            src={main.image3.image}
                            alt={main.image3.alt}
                        />
                    </figure>
                </div>
            </section>

            <Testimonials testimonials={testimonials} />
            <section className="block--full layout-grid block block--dark_skin">
                <FullScreenMedia
                    image={full_image}
                    altText=""
                    aria-role="presentation"
                />
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
            image={frontmatter.image}
            title={frontmatter.title}
            heading={frontmatter.heading}
            description={frontmatter.description}
            intro={frontmatter.intro}
            main={frontmatter.main}
            testimonials={frontmatter.testimonials}
            full_image={frontmatter.full_image}
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
                image
                heading
                description
                intro {
                    blurbs {
                        image
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
                        image
                    }
                    image2 {
                        alt
                        image
                    }
                    image3 {
                        alt
                        image
                    }
                }
                testimonials {
                    author
                    quote
                }
                full_image
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
