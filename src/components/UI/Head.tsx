import { Helmet } from "react-helmet-async";

const Head = ({ link, desc }: { link: string; desc: string }) => {
  console.log(desc);
  return (
    <Helmet>
      <title>Makers: {link}</title>
      <meta name="description" content={`${desc}`} />

      <meta property="og:title" content={`Makers: ${link}`} />
      <meta property="og:description" content={`${desc}`} />
      <meta
        property="og:image"
        content="https://firebasestorage.googleapis.com/v0/b/maker-efebf.appspot.com/o/home%2FMetaImg.png?alt=media&token=b3a90484-eb5a-453a-bc06-b36d57e2810d&_gl=1*1gtqvud*_ga*MzU3Mzg1ODQ5LjE2ODI2MTYxNDQ.*_ga_CW55HF8NVT*MTY4NjA3MzM0MS42LjEuMTY4NjA3MzgzMS4wLjAuMA.."
      />
      <meta property="og:image:width" content="474" />
      <meta property="og:image:height" content="187" />
      <meta property="og:url" content="https://makers-plum.vercel.app" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={`Makers: ${link}`} />

      <meta name="twitter:card" content={`Makers: ${link}`} />
      <meta property="twitter:domain" content="makers-plum.vercel.app" />
      <meta property="twitter:url" content="https://makers-plum.vercel.app" />
      <meta name="twitter:title" content={`Makers: ${link}`} />
      <meta name="twitter:description" content={`${desc}`} />
      <meta
        name="twitter:image"
        content="https://firebasestorage.googleapis.com/v0/b/maker-efebf.appspot.com/o/home%2FMetaImg.PNG?alt=media&token=73745d78-ebc2-4442-86c7-fdd7a82df5e5"
      />
    </Helmet>
  );
};

export default Head;
