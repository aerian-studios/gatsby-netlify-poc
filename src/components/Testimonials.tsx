import * as React from "react";

interface Props {
  testimonials: Array<{
    author: string;
    quote: string;
  }>;
}

const Testimonials: React.SFC<Props> = ({ testimonials }) => (
  <div>
    {testimonials.map(testimonial => (
      <article className="message">
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
);

export default Testimonials;
