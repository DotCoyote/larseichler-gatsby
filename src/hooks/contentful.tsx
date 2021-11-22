import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

export default function useContentful() {
  const Bold = ({ children }) => <span className="font-bold">{children}</span>;
  const Text = ({ children }) => <p className="align-center">{children}</p>;
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
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
  };

  function displayRichText(text) {
    return documentToReactComponents(JSON.parse(text), options);
  }

  return {
    displayRichText,
  };
}
