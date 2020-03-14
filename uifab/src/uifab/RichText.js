import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactQuill from 'react-quill';

import { withStyles } from './styles';

import 'react-quill/dist/quill.snow.css';

function RichText(props) {
  const {
    className,
    value,
  } = props;

  const ref = useRef(null);
  useEffect(() => {
    /* eslint-disable react/no-find-dom-node */
    const element = ReactDOM.findDOMNode(ref.current);
    /* eslint-enable react/no-find-dom-node */

    if (element) {
      const containerElement = element.getElementsByClassName('ql-container')[0];
      const editorElement = element.getElementsByClassName('ql-editor')[0];
      const containerSnowElement = element.getElementsByClassName('ql-container ql-snow')[0];
      containerElement.style.color = 'inherit';
      containerElement.style.fontFamily = 'inherit';
      containerElement.style.fontSize = 'inherit';
      editorElement.style.padding = '0';
      containerSnowElement.style.borderStyle = 'none';
    }
  }, []);

  return (
    <ReactQuill
      className={className}
      ref={ref}
      readOnly
      modules={{ toolbar: false }}
      preserveWhitespace
      value={value}
    />
  );
}

RichText.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
};

RichText.defaultProps = {
  className: null,
  value: null,
};

export default withStyles(RichText);
