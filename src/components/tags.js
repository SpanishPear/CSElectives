import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Label } from 'semantic-ui-react';

const LabelExampleIcon = (props) => {
  const { activeTags, setActiveTags } = props;

  return (
    <div>
      {activeTags.map((tag) => (
        <Label key={tag} as='a' circular>
          {tag}
          <Icon name='delete' />
        </Label>
      ))}
    </div>
  );
};

LabelExampleIcon.propTypes = {
  code: PropTypes.string,
  activeTags: PropTypes.array,
  setActiveTags: PropTypes.func,
};

export default LabelExampleIcon;
