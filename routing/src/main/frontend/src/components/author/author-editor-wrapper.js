import React from 'react';
import PropTypes from 'prop-types';
import AuthorEditor from './author-editor';

class AuthorEditorWrapper extends React.Component {
  render() {
    return (
      <div>
        <h2>View {this.props.originalAuthor.firstName} {this.props.originalAuthor.lastName} details </h2>
        <AuthorEditor author={this.props.author} changes={this.props.changes}/>
      </div>
    );
  }
}

AuthorEditorWrapper.propTypes = {
  originalAuthor: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  changes: PropTypes.bool
};

export default AuthorEditorWrapper;
