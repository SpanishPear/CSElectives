

import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Card, Progress, Rating } from 'semantic-ui-react';
import ReviewRating from '../components/review-rating/review-rating.js';

const RatingsCard = (props) => {
  const { reviewTitle, usefulProgress, workloadProgress, difficultyProgress,
    enjoymentProgress, reviewDate, overallRating, termTaken, author } = props;

  return (

    <div className='review-cards'>
      <Card fluid raised>
        <Card.Content>
          <Grid columns={2}>
            <Grid.Row className='review-row'>
              <Grid.Column>
                <Card.Header><h3>{reviewTitle}</h3></Card.Header>
                <Card.Meta className='course-review-card-star-rating'>
                  Overall:
                  <Rating icon='star' rating={overallRating} maxRating={5} disabled />
                  <div>
                    Term taken: {termTaken}
                  </div>
                </Card.Meta>

              </Grid.Column>
              <Grid.Column>
                <div style={{ textAlign: 'right' }}>{reviewDate}</div>
                <Card.Meta className='reviewCardAuthor'>
                  {author}
                </Card.Meta>

              </Grid.Column>
            </Grid.Row>


          </Grid>

          <Grid columns={4}>
            <Grid.Row className='review-row'>
              <Grid.Column width={3}>
                <label>Usefulness</label>
                <br />
                <label>Workload</label>
              </Grid.Column>
              <Grid.Column width={5}>
                <ReviewRating
                  rating={usefulProgress}
                  icon='circle'
                  size='small'
                  captions={['🤬', '😥', '😐', '😀', '😍']}
                  onChange={(newRating) => setOverallRating(newRating)}
                />
                <ReviewRating
                  rating={workloadProgress}
                  icon='circle'
                  size='small'
                  captions={['🤬', '😥', '😐', '😀', '😍']}
                  onChange={(newRating) => setOverallRating(newRating)}
                />

              </Grid.Column>
              <Grid.Column width={3}>
                <label>Enjoyment</label>
                <br />
                <label>Difficulty</label>

              </Grid.Column>
              <Grid.Column width={5}>
                <ReviewRating
                  rating={enjoymentProgress}
                  icon='circle'
                  size='small'
                  captions={['🤬', '😥', '😐', '😀', '😍']}
                  onChange={(newRating) => setOverallRating(newRating)}
                />
                <ReviewRating
                  rating={difficultyProgress}
                  icon='circle'
                  size='small'
                  captions={['🤬', '😥', '😐', '😀', '😍']}
                  onChange={(newRating) => setOverallRating(newRating)}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    </div>


  );
};

RatingsCard.propTypes = {
  reviewTitle: PropTypes.string,
  usefulProgress: PropTypes.number,
  workloadProgress: PropTypes.number,
  enjoymentProgress: PropTypes.number,
  difficultyProgress: PropTypes.number,
  reviewDate: PropTypes.number,
  overallRating: PropTypes.number,
  termTaken: PropTypes.string,
  author: PropTypes.string,
};

export default RatingsCard;

