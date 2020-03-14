import TextareaAutosize from 'react-textarea-autosize';

import inputStyle from './inputStyle';
import { withStyles } from './styles';

const Textarea = withStyles(TextareaAutosize, inputStyle);

Textarea.defaultProps = {
  minRows: 3,
};

export default Textarea;
