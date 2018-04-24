import * as React from "react";

export const HeroBlock: React.SFC = ({ children }) => (
  <header className="block--hero_skin block--full block layout-grid">
    {children}
  </header>
);
