import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';

import stylex from './stylex';

import 'react-quill/dist/quill.snow.css';

function RichTextInput(props) {
  const {
    className, name, onChange,
    placeholder, value,
  } = props;

  const [valueState, setValue] = useState(value);
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
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

RichTextInput.defaultProps = {
  className: null,
  name: 'richText',
  onChange: null,
  placeholder: '',
  value: null,
};

const StyledRickTextInput = stylex(RichTextInput,
  {
    borderColor: 'border',
    '.ql-container': {
      color: 'inherit',
      fontFamily: 'inherit',
      fontSize: 'inherit',
    },
    '.ql-container.ql-snow': {
      borderStyle: 'none',
    },
    '.ql-toolbar.ql-snow': {
      borderStyle: 'none none solid none',
      borderColor: 'inherit',
    },
    '.ql-picker.ql-size': {
      width: '5rem',
    },
    '.ql-align svg': {
      verticalAlign: 'top',
    },
  },
  (props, { css }) => css({
    '.ql-editor': {
      minHeight: `${props.minLines * 1.5 + 1}rem`,
    },
  }));

StyledRickTextInput.defaultProps = {
  minLines: 10,
};

export default StyledRickTextInput;
