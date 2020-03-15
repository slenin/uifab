import Text from './Text';
import style from './style';

const EllipsisText = style(Text, {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export default EllipsisText;
