import TextareaAutosize from 'react-textarea-autosize';

import inputStyle from './inputStyle';
import stylex from './stylex';

const Textarea = stylex(TextareaAutosize, inputStyle);

Textarea.defaultProps = {
  minRows: 3,
};

export default Textarea;
