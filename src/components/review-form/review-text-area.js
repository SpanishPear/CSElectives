import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const TITLE_MAX_LENGTH = 80;

const ReviewTextArea = (props) => {
  const { title, setTitle, comment, setComment, disabled } = props;

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
        placeholder={'Title'}
        fluid
        value={title}
        onChange={handleTitleChange}
        disabled={disabled}
      />
      <Form.TextArea
        style={{ resize: 'none' }}
        rows={16}
        multiline
        placeholder={
          // 'Things you can discuss: Experience with the assessments
          // labs final exams Relative difficulty in managing the
          //  workload Difficulty of core concepts Overall enjoyment
          //  interesting topics you found. How strongly you recommend
          //  it as an elective.'
          // eslint-disable-next-line max-len
          'Feel free to discuss: \n Experience with the assessments labs final exams \nRelative difficulty in managing the workload \nDifficulty of core concepts \nOverall enjoyment / interesting topics you found \nHow strongly you recommend it as an elective.'
        }
        fluid
        value={comment}
        onChange={(e, { value }) => setComment(value)}
        disabled={disabled}
      />
    </Form.Field>
  );
};

ReviewTextArea.propTypes = {
  title: PropTypes.string,
  setTitle: PropTypes.func,
  comment: PropTypes.string,
  setComment: PropTypes.func,
  disabled: PropTypes.bool,
};

export default ReviewTextArea;
