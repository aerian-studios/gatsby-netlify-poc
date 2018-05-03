import * as React from "react";

interface Props {
    testimonials: Array<{
        author: string;
        quote: string;
    }>;
}

const Testimonials: React.SFC<Props> = ({ testimonials }) => (
    <section className="block block--light_skin block--full layout-grid">
        {testimonials.map((testimonial, index) => (
            <article className="message" key={`testimonial-${index}`}>
                <blockquote className="message-body">
                    {testimonial.quote}
                    <br />
                    <cite> – {testimonial.author}</cite>
                </blockquote>
            </article>
        ))}
    </section>
);

export default Testimonials;
