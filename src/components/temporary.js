<div className='review-cards'>
  <Card fluid raised>
    <Card.Content>
      <Grid>
        <Grid.Row className='review-row-ratings-only'>
          <div className='course-review-card-header'></div>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Card.Header as='h3' content={reviewTitle} />
              </Grid.Column>
              <Grid.Column>
                <span className='course-review-card-date'>{reviewDate}</span>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Card.Meta className='course-review-card-star-rating'>
            Overall: <Rating icon='star' defaultRating={overallRating} maxRating={5} disabled />
          </Card.Meta>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <div>
                  <label>Usefulness</label>
                  <Progress value={usefulProgress} total='5' progress='ratio' size='small' color='blue' />
                </div>
                <div>
                  <label>Workload</label>
                  <Progress value={workloadProgress} total='5' progress='ratio' size='small' color='blue' />
                </div>
              </Grid.Column>
              <Grid.Column>
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
        </Grid.Row>
      </Grid>
    </Card.Content>
  </Card>
</div>


<div style={{ display: 'block', margin: '20px' }}>
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

// fixed size

<div style={{ display: 'block', margin: '20px', width: '100%' }}>
      <Card fluid raised>
        <Card.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Card.Meta className='course-review-card-star-rating'>
                  Overall:
                  <Rating icon='star' rating={overallRating} maxRating={5} disabled />
                  <div>
                    Term taken: {termTaken}
                  </div>
                </Card.Meta>
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

// dots

<div style={{ display: 'block', margin: '20px', width: '100%' }}>
      <Card fluid raised>
        <Card.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Card.Meta className='course-review-card-star-rating'>
                  Overall:
                  <Rating icon='star' rating={overallRating} maxRating={5} disabled />

                  <div>
                    Term taken: {termTaken}
                  </div>
        
                </Card.Meta>
                <Card.Header as='h3' content={reviewTitle} />



<Grid>
                <div>
                  <Grid columns={2}>
                    <Grid.Row>
                      <Grid.Column>
                        <label>Usefulness</label>

                      </Grid.Column>

                      <Grid.Column>
                        <ReviewRating
                          rating={usefulProgress}
                          icon='circle'
                          size='small'
                          captions={['🤬', '😥', '😐', '😀', '😍']}
                          onChange={(newRating) => setOverallRating(newRating)}
                        />

                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                        <label>Usefulness</label>

                      </Grid.Column>

                      <Grid.Column>
                        <ReviewRating
                          rating={usefulProgress}
                          icon='circle'
                          size='small'
                          captions={['🤬', '😥', '😐', '😀', '😍']}
                          onChange={(newRating) => setOverallRating(newRating)}
                        />

                      </Grid.Column>
                    </Grid.Row>
                  </Grid>


                </div>


              </Grid.Column>
              <Grid.Column width={8}>
                <div>
                  <Grid columns={2}>
                    <Grid.Row>
                      <Grid.Column>
                        <label>Usefulness</label>

                      </Grid.Column>

                      <Grid.Column>
                        <ReviewRating
                          rating={usefulProgress}
                          icon='circle'
                          size='small'
                          captions={['🤬', '😥', '😐', '😀', '😍']}
                          onChange={(newRating) => setOverallRating(newRating)}
                        />

                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                        <label>Usefulness</label>

                      </Grid.Column>

                      <Grid.Column>
                        <ReviewRating
                          rating={usefulProgress}
                          icon='circle'
                          size='small'
                          captions={['🤬', '😥', '😐', '😀', '😍']}
                          onChange={(newRating) => setOverallRating(newRating)}
                        />

                      </Grid.Column>
                    </Grid.Row>
                  </Grid>


                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    </div>