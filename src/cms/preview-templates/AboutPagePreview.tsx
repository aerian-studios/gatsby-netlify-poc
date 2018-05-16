import * as React from "react";
import Content, { HTMLContent } from "../../components/Content";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry, widgetFor }) => (
    <AboutPageTemplate
        contentComponent={HTMLContent}
        title={entry.getIn(["data", "title"])}
        content={widgetFor("body")}
        heroImage={entry.getIn(["data", "heroimage"])}
    />
);

export default AboutPagePreview;
