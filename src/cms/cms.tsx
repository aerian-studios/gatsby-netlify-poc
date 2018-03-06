import * as React from "react";
import CMS from "netlify-cms";
import "netlify-cms/dist/cms.css";

import BlogPostPreview from "./preview-templates/BlogPostPreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";

// CMS.registerPreviewStyle("/styles.css");
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
