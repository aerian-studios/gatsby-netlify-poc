import * as React from "react";
import { ProductPageTemplate } from "../../templates/product-page";
import {
    Testimonial,
    ProductPricing,
    ProductIntro,
} from "../../datatypes/dataTypes";

interface Props {
    entry: any;
    getAsset: (asset: string) => string;
}

const ProductPagePreview: React.SFC<Props> = ({ entry, getAsset }) => {
    const entryBlurbs = entry.getIn(["data", "intro", "blurbs"]);
    const blurbs: ProductIntro = entryBlurbs ? entryBlurbs.toJS() : [];

    const entryTestimonials = entry.getIn(["data", "testimonials"]);
    const testimonials: Array<Testimonial> = entryTestimonials
        ? entryTestimonials.toJS()
        : [];

    const entryPricingPlans = entry.getIn(["data", "pricing", "plans"]);
    const pricingPlans: ProductPricing = entryPricingPlans
        ? entryPricingPlans.toJS()
        : [];

    return (
        <ProductPageTemplate
            heroImage={entry.getIn(["data", "image"])}
            title={entry.getIn(["data", "title"])}
            heading={entry.getIn(["data", "heading"])}
            description={entry.getIn(["data", "description"])}
            intro={{ blurbs }}
            main={{
                heading: entry.getIn(["data", "main", "heading"]),
                description: entry.getIn(["data", "main", "description"]),
                image1: {
                    image: getAsset(
                        entry.getIn(["data", "main", "image1", "image"])
                    ),
                    alt: entry.getIn(["data", "main", "image1", "alt"]),
                },
                image2: {
                    image: getAsset(
                        entry.getIn(["data", "main", "image2", "image"])
                    ),
                    alt: entry.getIn(["data", "main", "image2", "alt"]),
                },
                image3: {
                    image: getAsset(
                        entry.getIn(["data", "main", "image3", "image"])
                    ),
                    alt: entry.getIn(["data", "main", "image3", "alt"]),
                },
            }}
            testimonials={testimonials}
            fullImage={entry.getIn(["data", "full_image"])}
            pricing={{
                heading: entry.getIn(["data", "pricing", "heading"]),
                description: entry.getIn(["data", "pricing", "description"]),
                plans: pricingPlans,
            }}
        />
    );
};

export default ProductPagePreview;
