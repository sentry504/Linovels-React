import { Helmet } from 'react-helmet';
import React from 'react';
const Seo = ({ title, description, keywords }) => {
  const url = document.URL
	return (
<Helmet htmlAttributes={{lang:'en'}} title={title} meta={[
        {
          name:'description',
          content: description,
        },
        {
          name: 'keywords',
          content: keywords,
        },
		]}
    links={[
     {
          rel: 'canonical',
          href: url,
      },
    ]}
    />
 );
}
export default Seo;