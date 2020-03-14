import Text from './Text';
import { withStyles } from './styles';

const EllipsisText = withStyles(Text, {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export default EllipsisText;
