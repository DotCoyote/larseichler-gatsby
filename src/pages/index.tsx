import { graphql } from 'gatsby';
import * as React from 'react';
import useContentful from '../hooks/contentful';
import DefaultLayout from '../layouts/default';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const IndexPage = ({ data }) => {
  const { displayRichText } = useContentful();
  const avatarImage = getImage(
    data.allContentfulHomepage.edges[0].node.avatarImage,
  );
  console.log(avatarImage);

  return (
    <DefaultLayout title={'Home Page'}>
      {data.allContentfulHomepage.edges &&
        data.allContentfulHomepage.edges.map(post => {
          return (
            <article
              key={post.node.id}
              className="px-8 flex flex-row min-h-screen items-end pb-12"
            >
              <h1 className="text-8xl max-w-4xl">
                <span className="text-gray-400">I am</span>{' '}
                <strong>Lars Eichler</strong>,
                <br />
                <span className="text-indigo-300">Web-Developer & Speaker</span>
              </h1>
              {avatarImage && (
                <div className="mb-20 ml-16 w-64 h-64 transform -rotate-45 overflow-hidden">
                  <GatsbyImage
                    image={avatarImage}
                    alt={
                      data.allContentfulHomepage.edges[0].node.avatarImage.title
                    }
                    className="transform rotate-45 w-96 h-96 -m-16"
                  />
                </div>
              )}
            </article>
          );
        })}
    </DefaultLayout>
  );
};

export const POSTS_QUERY = graphql`
  query Post {
    allContentfulHomepage {
      edges {
        node {
          id
          avatarImage {
            file {
              fileName
              contentType
              url
              details {
                size
                image {
                  height
                  width
                }
              }
            }
            title
            gatsbyImageData(
              width: 450
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;

export default IndexPage;
