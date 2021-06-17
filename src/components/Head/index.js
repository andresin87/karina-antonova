import NextHead from "next/head";

const Head = ({ title }) => (
  <NextHead>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
  </NextHead>
);

export default Head;
