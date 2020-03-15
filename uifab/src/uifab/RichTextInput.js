import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactQuill from 'react-quill';

import style from './style';
import useTheme from './useTheme';

import 'react-quill/dist/quill.snow.css';

function RichTextInput(props) {
  const {
    className, minLines, name, onChange,
    placeholder, value,
  } = props;

  const [valueState, setValue] = useState(value);
  const ref = useRef(null);
  const theme = useTheme();
  useEffect(() => {
    /* eslint-disable react/no-find-dom-node */
    const element = ReactDOM.findDOMNode(ref.current);
    /* eslint-enable react/no-find-dom-node */

    const containerElement = element.getElementsByClassName('ql-container')[0];
    const editorElement = element.getElementsByClassName('ql-editor')[0];
    const containerSnowElement = element.getElementsByClassName('ql-container ql-snow')[0];
    const toolbarSnowElement = element.getElementsByClassName('ql-toolbar ql-snow')[0];
    const alignElement = element.getElementsByClassName('ql-align')[0];
    const pickerSizeElement = element.getElementsByClassName('ql-picker ql-size')[0];
    const svgElements = alignElement.getElementsByTagName('svg');
    containerElement.style.color = 'inherit';
    containerElement.style.fontFamily = 'inherit';
    containerElement.style.fontSize = 'inherit';
    editorElement.style.minHeight = `${minLines * 1.5 + 1}em`;
    containerSnowElement.style.borderStyle = 'none none solid none';
    containerSnowElement.style.borderColor = theme.colors.border;
    toolbarSnowElement.style.borderStyle = 'none none solid none';
    toolbarSnowElement.style.borderColor = theme.colors.border;
    pickerSizeElement.style.width = '5rem';
    for (let i = 0; i < svgElements.length; i += 1) {
      svgElements[i].style.verticalAlign = 'top';
    }
  }, [minLines, theme.colors.border]);

  const modules = {
    toolbar: [
      [{ size: ['small', false, 'large'] }],
      ['bold', 'italic', 'underline', 'strike', 'link'],
      [{ script: 'sub' }, { script: 'super' }],
      ['blockquote', 'code-block'],
      [{ align: [] }, { list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['clean'],
    ],
  };

  const formats = [
    'size',
    'bold', 'italic', 'underline', 'strike', 'link',
    'script',
    'blockquote', 'code-block',
    'align', 'list', 'bullet', 'indent',
  ];

  return (
    <ReactQuill
      className={className}
      ref={ref}
      id={name}
      placeholder={placeholder}
      modules={modules}
      formats={formats}
      preserveWhitespace
      value={valueState}
      onChange={(v) => {
        const finalValue = v === '<p><br></p>' ? '' : v;
        setValue(finalValue);
        if (onChange) {
          onChange({ target: { name, value: finalValue } });
        }
      }}
    />
  );
}

RichTextInput.propTypes = {
  className: PropTypes.string,
  minLines: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

RichTextInput.defaultProps = {
  className: null,
  minLines: 10,
  name: 'richText',
  onChange: null,
  placeholder: '',
  value: null,
};

export default style(RichTextInput);
