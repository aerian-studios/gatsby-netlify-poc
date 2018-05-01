import * as React from "react";

export interface IImage {
  alt: string;
  image: string;
}

export interface ITestimonial {
  author: string;
  quote: string;
}

// PRODUCTS
export interface IProductIntro {
  blurbs: Array<{
    image: string;
    text: string;
  }>;
}

interface IProductMain {
  heading: string;
  description: string;
  image1: IImage;
  image2: IImage;
  image3: IImage;
}

export interface IProductPlan {
  description: string;
  items: Array<any>;
  plan: string;
  price: number;
}

interface IProductPricing {
  heading: string;
  description: string;
  plans: Array<IProductPlan>;
}

export interface IProductFrontmatter {
  title: string;
  image: string;
  heading: string;
  description: string;
  intro: IProductIntro;
  main: IProductMain;
  testimonials: Array<ITestimonial>;
  full_image: string;
  pricing: IProductPricing;
  heroimage: string;
}

export interface IProductData {
  data: {
    markdownRemark: {
      frontmatter: IProductFrontmatter;
    };
  };
}

// BLOGS
interface IBlogFrontmatter {
  title: string;
  data: string;
  description: string;
  heroimage: string;
}

interface IBlogContent {
  id: string;
  html: React.ReactChildren | React.SFC;
  frontmatter: IBlogFrontmatter;
}

export interface IBlogData {
  data: {
    markdownRemark: IBlogContent;
  };
}
