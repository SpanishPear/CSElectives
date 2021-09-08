import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from 'semantic-ui-react';

const DropdownTagsMenu = (props) => {
  const { title, tagOptions, activeTags, setActiveTags } = props;

  const toggleSelectionDrop = (e, { text }) => {
    if (activeTags.includes(text)) {
      setActiveTags(activeTags.filter((el) => el !== text));
    } else {
      setActiveTags([...activeTags, text].sort(function(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      }));
    }
  };

  const tagItems = (object) => {
    return (
      <Dropdown.Item
        text={object.value}
        className='ui dropdown menu> item'
        onClick={toggleSelectionDrop}
      >
        <div className="ui attached icon form" id="info_input_form">
          <div className={'ui checkbox ' + title.toLowerCase()}>
            <input
              type="checkbox"
              tabIndex="0"
              checked={activeTags.includes(object.value)}
            />
            <label className="coloring black">{object.value}</label>
          </div>
        </div>
      </Dropdown.Item>
    );
  };

  return (
    <Dropdown
      text={title}
      item
      simple
      className='icon'
    >
      <Dropdown.Menu className={'ui dropdown menu ' + title.toLowerCase()}>
        <Dropdown.Header icon='tags' content={`Filter by ${title}`} />
        {tagOptions.map(tagItems)}
      </Dropdown.Menu>
    </Dropdown>
  );
};

DropdownTagsMenu.propTypes = {
  title: PropTypes.string,
  tagOptions: PropTypes.array,
  activeTags: PropTypes.array,
  setActiveTags: PropTypes.func,
};

export default DropdownTagsMenu;
