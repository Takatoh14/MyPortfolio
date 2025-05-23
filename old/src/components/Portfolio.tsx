import "../../src/styles/main.scss";
import "../../src/styles/_Portfolio.scss";
import "../../src/styles/_responsive.scss";

import IconImages from "./IconImages";
import React from "react";

const Portfolio: React.FC = () => {
  return (
    <section className="portfolio scroll-offset">
      <h1>Takato Tanabe’s Portfolio</h1>
      <div className="icon-marquee">
        <div className="icon-track">
          <IconImages />
          <IconImages />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
