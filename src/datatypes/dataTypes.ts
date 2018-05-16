import * as React from "react";

export interface Image {
    alt?: string;
    image: string | ImageSharp;
}

export interface ImageSharp {
    childImageSharp: {
        sizes: ImageSharpSizes;
        src: string;
    };
}

export interface Testimonial {
    author: string;
    quote: string;
}

// PRODUCTS
export interface ProductIntro {
    blurbs: Array<{
        image: ImageSharp | string;
        text: string;
    }>;
}

interface ProductMain {
    heading: string;
    description: string;
    image1: Image;
    image2: Image;
    image3: Image;
}

export interface ProductPlan {
    description: string;
    items: Array<any>;
    plan: string;
    price: number;
}

export interface ProductPricing {
    heading: string;
    description: string;
    plans: Array<ProductPlan>;
}

export interface ProductFrontmatterProps {
    title: string;
    heroImage?: ImageSharpSizes | string;
    heading: string;
    description: string;
    intro: ProductIntro;

    main: ProductMain;
    testimonials: Array<Testimonial>;
    full_image: ImageSharpSizes | string;
    pricing: ProductPricing;
}
export interface ProductFrontmatter {
    title: string;
    image?: ImageSharp | string;
    heading: string;
    description: string;
    intro: ProductIntro;

    main: ProductMain;
    testimonials: Array<Testimonial>;
    full_image: ImageSharp | string;
    pricing: ProductPricing;
}

export interface IProductData {
    data: {
        markdownRemark: {
            frontmatter: ProductFrontmatter;
        };
    };
}

// BLOGS
interface BlogFrontmatter {
    title: string;
    data: string;
    description: string;
    heroimage: ImageSharp;
}

interface BlogContent {
    id: string;
    html: React.ReactChildren | React.SFC;
    frontmatter: BlogFrontmatter;
}

export interface BlogData {
    data: {
        markdownRemark: BlogContent;
    };
}

export interface ImageSharpSizes {
    aspectRatio?: number;
    sizes?: string;
    src: string;
    srcSet?: string;
    tracedSVG?: string;
}
