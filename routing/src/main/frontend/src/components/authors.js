import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectTab } from '../actions/navigation.action';
import { loadAuthors, fetchAuthor } from '../actions/author.action';
import { cancelOperation } from '../actions/operation.action';
import IndexComponent from './index';
import AuthorComponent from './author/author-component';
import {
  NAVIGATION_TAB_AUTHORS
} from '../constants/constants';

class AuthorsPage extends React.Component {

  componentDidMount() {
    this.props.selectTab(NAVIGATION_TAB_AUTHORS);
    this.props.loadAuthors();
    this.props.cancelCurrentOperation();
    this.updatePageState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.updatePageState(nextProps);
  }

  updatePageState(props) {
    if (props.params.authorId) {
      props.fetchAuthor(props.params.authorId);
    }
  }

  render() {
    return (
      <IndexComponent>
        <AuthorComponent />
      </IndexComponent>
    );
  }
}
/*
 We don't need copy anything to props from app state here
 */
function mapStateToProps(state) {
  return {}
}

/*
 Here we assign handlers to some actions
 */
function mapDispatchToProps(dispatch) {
  return {
    selectTab: bindActionCreators(selectTab, dispatch),
    loadAuthors: bindActionCreators(loadAuthors, dispatch),
    fetchAuthor: bindActionCreators(fetchAuthor, dispatch),
    cancelCurrentOperation : bindActionCreators(cancelOperation, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
