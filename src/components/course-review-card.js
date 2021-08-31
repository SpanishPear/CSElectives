import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react';
import RatingExampleDisabled from '../components/star-ratings.js';

const CourseReviewCard = (props) => {
  const { code } = props;

  return (
    <div style={{ display: 'block' }}>
      <Card>
        <Card.Content>
          <Card.Header>{code}</Card.Header>
          <Card.Meta>Introduction to Programming</Card.Meta>
          <RatingExampleDisabled/>
          <Card.Description>
          This is a long description of the above course describing what the course entails
          and what to expect when you enroll in the course
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

CourseReviewCard.propTypes = {
  code: PropTypes.string,
};

export default CourseReviewCard;
