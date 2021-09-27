import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { Input, Segment, Grid, Image, Button, Container } from 'semantic-ui-react';

import DropdownTagsMenu from '../components/dropdown-tag-menu';
import DropdownSortMenu from '../components/dropdown-sort-menu';
import HomePageTags from '../components/home-page-tags.js';
import CardGrid from '../components/card-grid.js';
import { LoadingContext } from '../App.js';
import '../styles/home-page.css';

import FeedbackSvg from '../assets/illustrations/feedback.svg';

const createDropdownOption = (item) => ({
  key: item,
  text: item,
  value: item,
});

const sorts = [
  'Most Popular',
  'Most Useful',
  'Most Enjoyable',
  'Lowest Difficulty',
];

const majors = [
  'Artificial Intelligence',
  'Computer Networks',
  'Database Systems',
  'eCommerce Systems',
  'Embedded Systems',
  'Programming Languages',
  'Security Engineering',
];

const terms = [
  'Summer Term',
  'Term 1',
  'Term 2',
  'Term 3',
];

const prefix = [
  'BINF',
  'COMP',
  'ENGG',
  'SENG',
];

const sortOptions = sorts.map((item) => createDropdownOption(item));

const majorOptions = majors.map((item) => createDropdownOption(item));

const termOptions = terms.map((item) => createDropdownOption(item));

const prefixOptions = prefix.map((item) => createDropdownOption(item));


const HomePage = (props) => {
  const loading = useContext(LoadingContext);
  const { courses } = props;
  const [activeMajorTags, setActiveMajorTags] = useState([]);
  const [activeTermTags, setActiveTermTags] = useState([]);
  const [activePrefixTags, setActivePrefixTags] = useState([]);
  const [query, setQuery] = useState('');

  const handleQueryChange = (e, { value }) => {
    setQuery(value);
    console.log(query);
  };

  return (
    <>
      <section className='title-wrapper'>
        <div className='blob' />

        <div className='left'>
          <h1>
            <span className='cs'>CS</span>
            <span className='electives'>Electives</span>
          </h1>
          <h2>
            The UNSW Course Review Website by CSESoc
          </h2>

          <Button secondary content='Start reviewing!' />
        </div>
        <Image className='right' size='large' src={FeedbackSvg} />
      </section>

      <Container className='course-cards-wrapper'>
        <div className='search-background' />
        <Segment className="search-section-background">
          <Input
            size='massive'
            icon='search'
            placeholder='COMP1511'
            fluid
            onChange={handleQueryChange}
          />

          <div className='sort-and-filter-container'>
            <div className='sort-dropdown-parent'>
              <div className='sort-dropdown-text'>
                Sort by:
              </div>
              <div className='sort-dropdown-menu'>
                <DropdownSortMenu options={sortOptions} />
              </div>
            </div>

            <div className='dropdown-tags-box'>
              <DropdownTagsMenu
                title='Major'
                tagOptions={majorOptions}
                activeTags={activeMajorTags}
                setActiveTags={setActiveMajorTags}
                className='dropdown-tags'
              />
            </div>
            <div className='dropdown-tags-box'>
              <DropdownTagsMenu
                title='Term'
                tagOptions={termOptions}
                activeTags={activeTermTags}
                setActiveTags={setActiveTermTags}
                className='dropdown-tags'
              />
            </div>
            <div className='dropdown-tags-box'>
              <DropdownTagsMenu
                title='Prefix'
                tagOptions={prefixOptions}
                activeTags={activePrefixTags}
                setActiveTags={setActivePrefixTags}
                className='dropdown-tags'
              />
            </div>
          </div>
        </Segment>

        {/* Tags component */}
        <div className='front-page-tags'>
          <HomePageTags
            activeTags={activeMajorTags}
            setActiveTags={setActiveMajorTags}
            category='major'
          />

          <HomePageTags
            activeTags={activeTermTags}
            setActiveTags={setActiveTermTags}
            category='term'
          />

          <HomePageTags
            activeTags={activePrefixTags}
            setActiveTags={setActivePrefixTags}
            category='prefix'
          />

        </div>

        {/* Code, name and desc hardcoded for testing purposes */}
        {loading ? <span>loading...</span> : (
          <Grid centered stackable doubling columns={3}>
            <CardGrid courses={courses} />
          </Grid>
        )}
      </Container>
    </>
  );
};

HomePage.propTypes = {
  courses: PropTypes.object,
};

export default HomePage;
