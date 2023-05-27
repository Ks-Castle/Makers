import React from "react";
import { Helmet } from "react-helmet-async";

const Head = ({ link }: { link: string }) => {
  return (
    <Helmet>
      <title>Makers: {link}</title>
    </Helmet>
  );
};

export default Head;
