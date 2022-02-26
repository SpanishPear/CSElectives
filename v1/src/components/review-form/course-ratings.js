import React from 'react';
import PropTypes from 'prop-types';
import { Popup, Icon } from 'semantic-ui-react';
import ReviewRating from '../review-rating/review-rating';

const CourseRatings = (props) => {
  const {
    overall, setOverall,
    enjoyment, setEnjoyment,
    usefulness, setUsefulness,
    manageability, setManageability,
  } = props;

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex' }}>
          <div>
            <h4 style={{ flexGrow: 1, marginRight: '1rem' }}>
              Overall Rating<span className='required'> *</span>
            </h4>
            <ReviewRating
              rating={overall}
              icon='star'
              size='big'
              palette='csesoc'
              clickable
              hoverable
              captions={['🤬', '😥', '😐', '😀', '😍']}
              onChange={(newOverall) => setOverall(newOverall)}

            />
          </div>
        </div>
        <div>
          <h5 style={{ flexGrow: 1, marginTop: '1rem' }}>
            Enjoyment<span className='required'> *</span>
          </h5>
          <div style={{ display: 'flex', paddingLeft: '0.5rem' }}>
            <ReviewRating
              rating={enjoyment}
              icon='circle'
              palette='trafficlight'
              clickable
              hoverable
              captions={['🤬', '😥', '😐', '😀', '😍']}
              onChange={(newEnjoyability) => setEnjoyment(newEnjoyability)}
              spacing='1.5rem'
            />
          </div>
          <h5 style={{ flexGrow: 1, marginTop: '1rem' }}>
            Usefulness<span className='required'> *</span>
            <span>
              <Popup
                content='How well the content can be applied in real life scenarios'
                size='mini'
                trigger={<Icon name='info circle' className='info-hover' size='small' color='grey' />}
              />
            </span>
          </h5>
          <div style={{ display: 'flex', paddingLeft: '0.5rem' }}>
            <ReviewRating
              rating={usefulness}
              icon='circle'
              palette='trafficlight'
              clickable
              hoverable
              captions={['🤬', '😥', '😐', '😀', '😍']}
              onChange={(newUsefulness) => setUsefulness(newUsefulness)}
              spacing='1.5rem'
            />
          </div>
          <h5 style={{ flexGrow: 1, marginTop: '1rem' }}>
            Manageability<span className='required'> *</span>
            <span>
              <Popup
                content='How well you were able to balance the workload'
                size='mini'
                trigger={<Icon name='info circle' className='info-hover' size='small' color='grey' />}
              />
            </span>
          </h5>
          <div style={{ display: 'flex', paddingLeft: '0.5rem' }}>
            <ReviewRating
              rating={manageability}
              icon='circle'
              palette='trafficlight'
              clickable
              hoverable
              captions={['🤬', '😥', '😐', '😀', '😍']}
              onChange={(newManageability) => setManageability(newManageability)}
              spacing='1.5rem'
            />
          </div>
        </div>
      </div>
    </>
  );
};

CourseRatings.propTypes = {
  overall: PropTypes.number,
  setOverall: PropTypes.func,
  enjoyment: PropTypes.number,
  setEnjoyment: PropTypes.func,
  usefulness: PropTypes.number,
  setUsefulness: PropTypes.func,
  manageability: PropTypes.number,
  setManageability: PropTypes.func,
};

export default CourseRatings;
