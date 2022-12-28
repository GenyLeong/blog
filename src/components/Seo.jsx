import React from 'react';
import { Helmet } from 'react-helmet';
import { GatsbyIcon } from "../images"

export default function Seo({
  title,
  description,
  image
}) {
  return (
    <Helmet>
      <title>{title || "Geny León Blog"}</title>
      <meta name="description" content={description || "Este lugar parte de la necesidad de documentar y compartir algunos conocimientos y reflexiones sobre periodismo, política y música."} />
      <meta name="image" content={image || ""} />

      <meta property="og:title" content={title || ""} />
      <meta property="og:type" content={"article"} />
      <meta property="og:description" content={description || ""} />
      <meta property="og:image" content={image} />

      <meta property="twitter:title" content={title || ""} />
      <meta property="twitter:description" content={description || ""} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="robots" content="index,follow" />
      <link rel="icon" href={GatsbyIcon} type="image/x-icon" />
    </Helmet>
  );
}
