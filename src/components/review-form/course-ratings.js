import React from 'react';
import PropTypes from 'prop-types';

import ReviewRating from '../review-rating/review-rating';

const CourseRatings = (props) => {
  const {
    overall, setOverall,
    difficulty, setDifficulty,
    enjoyment, setEnjoyment,
    usefulness, setUsefulness,
    workload, setWorkload,
  } = props;

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h4>
          Overall Rating<span className='required'> *</span>
        </h4>
        <ReviewRating
          rating={overall}
          icon='star'
          size='standard'
          clickable
          hoverable
          captions={['🤬', '😥', '😐', '😀', '😍']}
          onChange={(newOverall) => setOverall(newOverall)}
        />
      </div>
      <div className='ratingStyle'>
        <div className='ratingCategory'>
          <h5>
            Difficulty<span className='required'> *</span>
          </h5>
          <ReviewRating
            rating={difficulty}
            icon='circle'
            size='small'
            clickable
            hoverable
            captions={['😍', '😀', '😐', '😥', '🤬']}
            onChange={(newDifficulty) => setDifficulty(newDifficulty)}
          />
        </div>
        <div className='ratingCategory'>
          <h5>
            Enjoyability<span className='required'> *</span>
          </h5>
          <ReviewRating
            rating={enjoyment}
            icon='circle'
            size='small'
            clickable
            hoverable
            captions={['🤬', '😥', '😐', '😀', '😍']}
            onChange={(newEnjoyability) => setEnjoyment(newEnjoyability)}
          />
        </div>
        <div className='ratingCategory'>
          <h5>
            Usefulness<span className='required'> *</span>
          </h5>
          <ReviewRating
            rating={usefulness}
            icon='circle'
            size='small'
            clickable
            hoverable
            captions={['🤬', '😥', '😐', '😀', '😍']}
            onChange={(newUsefulness) => setUsefulness(newUsefulness)}
          />
        </div>
        <div className='ratingCategory'>
          <h5>
            Workload<span className='required'> *</span>
          </h5>
          <ReviewRating
            rating={workload}
            icon='circle'
            size='small'
            clickable
            hoverable
            captions={['😍', '😀', '😐', '😥', '🤬']}
            onChange={(newWorkload) => setWorkload(newWorkload)}
          />
        </div>
      </div>
    </>
  );
};

CourseRatings.propTypes = {
  overall: PropTypes.number,
  setOverall: PropTypes.func,
  difficulty: PropTypes.number,
  setDifficulty: PropTypes.func,
  enjoyment: PropTypes.number,
  setEnjoyment: PropTypes.func,
  usefulness: PropTypes.number,
  setUsefulness: PropTypes.func,
  workload: PropTypes.number,
  setWorkload: PropTypes.func,
};

export default CourseRatings;
