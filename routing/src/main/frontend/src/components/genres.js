import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectTab } from '../actions/navigation.action';
import { loadGenres, fetchGenre} from '../actions/genre.action';
import { cancelOperation } from '../actions/operation.action';
import IndexComponent from './index';
import GenreComponent from './genre/genre-component';
import {
  NAVIGATION_TAB_GENRES
} from '../constants/constants';

class GenresPage extends React.Component {

  componentDidMount() {
    this.props.selectTab(NAVIGATION_TAB_GENRES);
    this.props.loadGenres();
    this.props.cancelCurrentOperation();
    this.updatePageState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.updatePageState(nextProps);
  }

  updatePageState(props) {
    if (props.params.genreId) {
      props.fetchGenre(props.params.genreId);
    }
  }

  render() {
    return (
      <IndexComponent>
        <GenreComponent />
      </IndexComponent>
    );
  }
}
/*
 We don't need copy anything to props from app state here
 */
function mapStateToProps() {
  return {}
}

/*
 Here we assign handlers to some actions
 */
function mapDispatchToProps(dispatch) {
  return {
    selectTab: bindActionCreators(selectTab, dispatch),
    loadGenres: bindActionCreators(loadGenres, dispatch),
    fetchGenre: bindActionCreators(fetchGenre, dispatch),
    cancelCurrentOperation: bindActionCreators(cancelOperation, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenresPage);
