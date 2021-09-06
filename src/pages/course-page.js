import React from 'react';
import { Grid, Dropdown, Button, Header } from 'semantic-ui-react';
import ReviewCard from '../components/review-card.js';
import SummaryCard from '../components/summary-card.js';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import CourseReviewCard from '../components/course-review-card.js';


const CoursePage = (props) => {
  const { courses } = props;
  React.useEffect(() => {}, [courses]);
  const history = useHistory();
  const handleClick = () => {
    history.push('/review');
  };
  const getAvgOverall = () => {
    let total = 0;
    let count = 0;
    courses.COMP1511.reviews.forEach((review) => {
      total += review.rating.overall;
      count++;
    });
    return total / count;
  };

  const getAvgUsefulness = () => {
    let total = 0;
    let count = 0;
    courses.COMP1511.reviews.forEach((review) => {
      total += review.rating.usefulness;
      count++;
    });
    return total / count;
  };

  const getAvgWorkload = () => {
    let total = 0;
    let count = 0;
    courses.COMP1511.reviews.forEach((review) => {
      total += review.rating.workload;
      count++;
    });
    return total / count;
  };

  const getAvgEnjoyment = () => {
    let total = 0;
    let count = 0;
    courses.COMP1511.reviews.forEach((review) => {
      total += review.rating.enjoyment;
      count++;
    });
    return total / count;
  };

  const getAvgDifficulty = () => {
    let total = 0;
    let count = 0;
    courses.COMP1511.reviews.forEach((review) => {
      total += review.rating.difficulty;
      count++;
    });
    return total / count;
  };

  if (Object.keys(courses).length === 0) {
    return <span>loading...</span>;
  } else {
    console.log(courses.COMP1511);
    console.log(courses.COMP1511.reviews);
    const year = new Date().getFullYear();
    console.log(year);
    return (
      <>
        <Header>
          <h1 style={{ padding: 20, textAlign: 'center', margin: 40, fontSize: '80px', color: 'black' }}>
            {courses.COMP1511.courseCode}
          </h1>
        </Header>
        <div>
          <Grid stackable>
            <Grid.Column width={7} floated='left'>
              <div className="my-summary-card">
                <SummaryCard
                  summaryTitle={courses.COMP1511.courseCode + ' - ' + courses.COMP1511.title}
                  summaryLink=
                    {'https://www.handbook.unsw.edu.au/undergraduate/courses/'
                    + year + '/'
                    + courses.COMP1511.courseCode + '/'}
                  overallRating={getAvgOverall()}
                  numReviews={courses.COMP1511.reviews.length}
                  summaryDesc={courses.COMP1511.description}
                  usefulAvg={getAvgUsefulness()}
                  workloadAvg={getAvgWorkload()}
                  difficultyAvg={getAvgDifficulty()}
                  enjoymentAvg={getAvgEnjoyment()}
                />
              </div>
            </Grid.Column>
            <Grid.Column width={9} floated='right'>
              <Grid columns={3}>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <div className='review-heading'>
                      <h2>Reviews</h2>
                    </div>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <div className='sort-reviews'>
                      <Dropdown text = 'Sort by'>
                        <Dropdown.Menu>
                          <Dropdown.Item text='Most Popular' />
                          <Dropdown.Item text='Most Recent' />
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <div className='review-button'>
                      <Button class="ui button" onClick={handleClick} className='review-button'>
                          Submit a review
                      </Button>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              {Object.keys(courses.COMP1511.reviews).map((review, i) => {
                return (
                  <div key={i} className="card-displayer">
                    <ReviewCard
                      overallRating={courses.COMP1511.reviews[review].rating.overall}
                      reviewDate={courses.COMP1511.reviews[review].timestamp}
                      reviewTitle={courses.COMP1511.reviews[review].title}
                      reviewComment={courses.COMP1511.reviews[review].comment}
                      usefulProgress={courses.COMP1511.reviews[review].rating.usefulness}
                      workloadProgress={courses.COMP1511.reviews[review].rating.workload}
                      enjoymentProgress={courses.COMP1511.reviews[review].rating.enjoyment}
                      difficultyProgress={courses.COMP1511.reviews[review].rating.difficulty}
                    />
                  </div>
                );
              })}
            </Grid.Column>
          </Grid>
        </div>
      </>
    );
  };
};


CoursePage.propTypes = {
  courses: PropTypes.object,
};

export default CoursePage;
