import { graphql } from 'gatsby';
import * as React from 'react';
import useContentful from '../hooks/contentful';
import DefaultLayout from '../layouts/default';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const IndexPage = ({ data }) => {
  const { displayRichText } = useContentful();
  const [pageLoaded, setPageLoaded] = React.useState(false);

  const avatarImage = getImage(
    data.allContentfulHomepage.edges[0].node.avatarImage,
  );

  React.useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <DefaultLayout title={'Lars Eichler'}>
      {data.allContentfulHomepage.edges &&
        data.allContentfulHomepage.edges.map(post => {
          return (
            <article
              key={post.node.id}
              className="px-8 pt-40 md:pt-72 flex flex-col lg:flex-row min-h-screen items-end pb-12 justify-between"
            >
              <h1
                className={`
                  self-start max-w-4xl order-2 lg:order-1 mt-20 lg:pr-16
                  text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-8xl
                  transition-all delay-2500 duration-500 ease-in-out ${
                    pageLoaded
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }
                `}
              >
                <span className="text-gray-400">I am</span>{' '}
                <strong>Lars Eichler,</strong>
                <br />
                <span className="text-primary font-serif">
                  Web-Developer & Speaker
                </span>
              </h1>
              {avatarImage && (
                <div className="flex-grow order-1 lg:order-2 mt-0 self-center">
                  <div
                    className={`
                    w-40 h-40
                    md:w-64 md:h-64 lg:mb-20 xl:ml-16
                    transform -rotate-45 overflow-hidden
                    transition-all delay-500 duration-500 ease-in-out ${
                      pageLoaded
                        ? 'opacity-100 shadow-brutal-wide translate-x-0'
                        : 'opacity-0 shadow-brutal translate-x-10'
                    }`}
                  >
                    <GatsbyImage
                      image={avatarImage}
                      alt={
                        data.allContentfulHomepage.edges[0].node.avatarImage
                          .title
                      }
                      className="transform rotate-45 w-72 h-72 md:w-96 md:h-96 -m-16"
                    />
                  </div>
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
              formats: [AUTO, JPG, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;

export default IndexPage;
