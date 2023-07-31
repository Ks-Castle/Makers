import { Helmet } from "react-helmet-async";

const Head = ({ link, desc }: { link: string; desc: string }) => {
  return (
    <Helmet>
      <title>Makers: {link}</title>
      <meta name="description" content={`${desc}`} />
    </Helmet>
  );
};

export default Head;
