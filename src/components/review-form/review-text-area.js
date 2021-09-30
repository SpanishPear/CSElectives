import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon } from 'semantic-ui-react';

const TITLE_MAX_LENGTH = 80;

const ReviewTextArea = (props) => {
  const { title, setTitle, comment, setComment } = props;

  const handleTitleChange = (e, { value }) => {
    if (value.length > TITLE_MAX_LENGTH) {
      setTitle(title);
    } else {
      setTitle(value);
    }
  };

  return (
    <Form.Field>
      <Form.Input
        placeholder={Boolean(comment && !title) ? 'Your review needs a title' : 'Enter your title here!'}
        fluid
        error={Boolean(comment && !title)}
        value={title}
        onChange={handleTitleChange}
      />
      <Form.TextArea
        style={{ resize: 'none' }}
        rows={7}
        placeholder={Boolean(!comment && title) ? 'Your review needs a body' : 'Enter your review here!'}
        fluid
        error={Boolean(!comment && title)}
        value={comment}
        onChange={(e, { value }) => setComment(value)}
      />
    </Form.Field>
  );
};

ReviewTextArea.propTypes = {
  title: PropTypes.string,
  setTitle: PropTypes.func,
  comment: PropTypes.string,
  setComment: PropTypes.func,
};

export default ReviewTextArea;
