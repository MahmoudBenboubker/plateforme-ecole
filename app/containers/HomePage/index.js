/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
  selectShowNiveaux,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import Grid from '@material-ui/core/Grid';

import NiveauPaper from '../../components/NiveauPaper/Loadable';
import CenteredSection from './CenteredSection';
import Section from './Section';
import messages from './messages';
import { fetchNiveauxAction } from '../App/actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

import CustomGrid from '../../components/CustomGrid';

const key = 'home';

export function HomePage({ fetchNiveaux, niveauxSaga }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    fetchNiveaux();
  }, []);

  return (
    <article style={{ justifyContent: 'center', display: 'flex' }}>
      <Helmet>
        <title>Accueil</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <CenteredSection>
          <H2>
            <FormattedMessage {...messages.startProjectHeader} />
          </H2>
          <p>
            <FormattedMessage {...messages.startProjectMessage} />
          </p>
        </CenteredSection>
        <Section>
          <CustomGrid>
            {niveauxSaga.map(niveau => (
              <Grid key={niveau.id} item>
                <NiveauPaper key={niveau.id} niveau={niveau} />
              </Grid>
            ))}
          </CustomGrid>
        </Section>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  fetchNiveaux: PropTypes.func.isRequired,
  niveauxSaga: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  niveauxSaga: selectShowNiveaux(),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchNiveaux: fetchNiveauxAction,
    },
    dispatch,
  );

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
