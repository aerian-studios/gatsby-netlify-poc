import * as React from "react";

import { ProductPlan } from "../datatypes/dataTypes";

interface Props {
    data: Array<ProductPlan>;
}

const backgroundStyle = {
    backgroundColor: "rgba(255, 0, 10, 0.1)",
    padding: "var(--s-2) var(--s-1) 0",
    borderRadius: "5px",
};

const Pricing: React.SFC<Props> = ({ data }) => (
    <section className="group">
        {data.map((price) => (
            <div
                key={price.plan}
                className="group__item content-wrap"
                style={backgroundStyle}
            >
                <h3 className="">{price.plan}</h3>
                <h4 className="">${price.price}</h4>
                <p className="">{price.description}</p>
                <ul>{price.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
        ))}
    </section>
);

export default Pricing;
