import ReactGA from 'react-ga';
ReactGA.initialize('UA-97210552-1');

exports.onRouteUpdate = (state) => {
  ReactGA.pageview(state.pathname);
};
