import React from "react";
import { Helmet } from "react-helmet-async";

const Head = ({ link, desc }: { link: string; desc: string }) => {
  console.log(desc);
  return (
    <Helmet>
      <title>Makers: {link}</title>
      <meta name="description" content={`${desc}`} />
      <meta property="og:description" content={`${desc}`} />
      <meta name="twitter:description" content={`${desc}`} />
    </Helmet>
  );
};

export default Head;
