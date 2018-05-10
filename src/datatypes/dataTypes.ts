import * as React from "react";

export interface Image {
    alt: string;
    image: string;
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
        image: ImageSharp;
        text: string;
    }>;
}

interface ProductMain {
    heading: string;
    description: string;
    image1: ImageSharp;
    image2: ImageSharp;
    image3: ImageSharp;
}

export interface ProductPlan {
    description: string;
    items: Array<any>;
    plan: string;
    price: number;
}

interface ProductPricing {
    heading: string;
    description: string;
    plans: Array<ProductPlan>;
}

export interface ProductFrontmatter {
    title: string;
    image: ImageSharp;
    heading: string;
    description: string;
    intro: 
;
    main: ProductMain;
    testimonials: Array<Testimonial>;
    full_image: ImageSharp;
    pricing: ProductPricing;
    heroimage: ImageSharp;
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
