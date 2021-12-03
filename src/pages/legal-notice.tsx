import { graphql } from 'gatsby';
import React from 'react';
import useContentful from '../hooks/contentful';
import DefaultLayout from '../layouts/default';

const Content = ({ data }) => {
  const { displayRichText } = useContentful();

  return (
    <DefaultLayout title={data.contentfulContentPage.title} simpleFooter>
      <article className="pt-24 px-6">
        <h1>{data.contentfulContentPage.title}</h1>
        {displayRichText(data.contentfulContentPage.content.raw)}
      </article>
    </DefaultLayout>
  );
};

export const LEGAL_NOTICE_QUERY = graphql`
  query LegalNoticeContent {
    contentfulContentPage(id: { eq: "5b8caf6b-49f3-5ed5-8139-8f134e15062a" }) {
      content {
        raw
      }
      title
      id
    }
  }
`;

export default Content;
