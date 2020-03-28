import Text from './Text';
import stylex from './stylex';

const EllipsisText = stylex(Text, {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export default EllipsisText;
