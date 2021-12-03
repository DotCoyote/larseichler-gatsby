import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

export default function useContentful() {
  const Bold = ({ children }) => <span className="font-bold">{children}</span>;
  const Italic = ({ children }) => <span className="italic">{children}</span>;
  const Text = ({ children }) => <p className="align-center">{children}</p>;
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
          <>
            <h2>Embedded Asset</h2>
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
          </>
        );
      },
    },
    renderText: text =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),
  };

  function displayRichText(text) {
    return documentToReactComponents(JSON.parse(text), options);
  }

  return {
    displayRichText,
  };
}
