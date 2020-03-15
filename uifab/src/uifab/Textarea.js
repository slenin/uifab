import TextareaAutosize from 'react-textarea-autosize';

import inputStyle from './inputStyle';
import style from './style';

const Textarea = style(TextareaAutosize, inputStyle);

Textarea.defaultProps = {
  minRows: 3,
};

export default Textarea;
