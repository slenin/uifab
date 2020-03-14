import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';

import Button from './Button';
import { withStyles } from './styles';

const STRINGS = {
  more: 'See more',
  less: 'See less',
};

function TruncatedText(props) {
  const {
    children, lessText, lines, moreText,
    text,
  } = props;

  const [expanded, setExpanded] = useState(false);
  const [truncated, setTruncated] = useState(false);

  return (
    <div>
      <Truncate
        lines={!expanded && lines}
        ellipsis={(
          <span>
            {'... '}
            <Button
              format="link"
              text={moreText}
              onClick={(e) => {
                setExpanded(!expanded);
                e.preventDefault();
              }}
            />
          </span>
        )}
        onTruncate={(e) => {
          if (truncated !== e) {
            setTruncated(e);
          }
        }}
      >
        {text && text}
        {children && children}
      </Truncate>
      {!truncated && expanded && (
        <span>
          {' '}
          <Button
            format="link"
            text={lessText}
            onClick={(e) => {
              setExpanded(!expanded);
              e.preventDefault();
            }}
          />
        </span>
      )}
    </div>
  );
}

TruncatedText.propTypes = {
  children: PropTypes.node,
  lessText: PropTypes.string,
  lines: PropTypes.number,
  moreText: PropTypes.string,
  text: PropTypes.string,
};

TruncatedText.defaultProps = {
  children: null,
  lessText: STRINGS.less,
  lines: 3,
  moreText: STRINGS.more,
  text: null,
};

export default withStyles(TruncatedText);
