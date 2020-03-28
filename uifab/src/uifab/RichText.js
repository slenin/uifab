import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';

import stylex from './stylex';

import 'react-quill/dist/quill.snow.css';

function RichText(props) {
  const {
    className,
    text,
  } = props;

  return (
    <ReactQuill
      className={className}
      readOnly
      modules={{ toolbar: false }}
      preserveWhitespace
      value={text}
    />
  );
}

RichText.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

RichText.defaultProps = {
  className: null,
  text: null,
};

export default stylex(RichText, {
  '.ql-container': {
    color: 'inherit',
    fontFamily: 'inherit',
    fontSize: 'inherit',
  },
  '.ql-editor': {
    padding: 0,
  },
  '.ql-container.ql-snow': {
    borderStyle: 'none',
  },
});
