

import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Card, Progress, Rating } from 'semantic-ui-react';

const RatingsCard = (props) => {
  const { reviewTitle, usefulProgress, workloadProgress, difficultyProgress,
    enjoymentProgress, reviewDate, overallRating } = props;

  return (
    <div style={{ display: 'block', margin: '20px', width: '100%' }}>
      <Card fluid raised>
        <Card.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Card.Header as='h3' content={reviewTitle} />
                <div>
                  <label>Usefulness</label>
                  <Progress value={usefulProgress} total='5' progress='ratio' size='small' color='blue' />
                </div>
                <div>
                  <label>Workload</label>
                  <Progress value={workloadProgress} total='5' progress='ratio' size='small' color='blue' />
                </div>

              </Grid.Column>
              <Grid.Column width={8}>
                <span className='course-review-card-date'>{reviewDate}</span>
                <div>
                  <label>Enjoyment</label>
                  <Progress value={enjoymentProgress} total='5' progress='ratio' size='small' color='blue' />
                </div>
                <div>
                  <label>Difficulty</label>
                  <Progress value={difficultyProgress} total='5' progress='ratio' size='small' color='blue' />
                </div>
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
};

export default RatingsCard;

