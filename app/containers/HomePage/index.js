/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
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
          <H2>Bienvenue sur notre site !</H2>
          <p>
            Vous trouverez sur notre site tous les documents et les ressources
            pour vous accompagner dans vos études.
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
