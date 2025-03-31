import NextLink from 'next/link';
import React from 'react';

const QuickLink = ({
  linkText,
  underline,
  url,
}: {
  linkText: string;
  underline?: string | '';
  url?: string | '';
}) => {
  return (
    <>
      <NextLink
        className={`${underline ? underline : ''} text-gray-500 hover:text-gray-400`}
        href={url ? url : ''}
      >
        {linkText}
      </NextLink>
    </>
  );
};

export default QuickLink;
