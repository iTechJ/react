import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Menu from '../menu/menu';
import { startOperation } from '../../actions/operation.action';
import AuthorEditorWrapper from './author-editor-wrapper';
import {
  AUTHORS_URL
} from '../../constants/constants';

class AuthorComponent extends React.Component {

  buildRegularMenuItem(author, active) {
    return {
      id: author.id,
      label: `${author.firstName} ${author.lastName}`,
      url: AUTHORS_URL + '/' + author.id,
      active: active
    }
  }

  render() {
    const menuItems = this.props.authors.map(author => {
      return this.buildRegularMenuItem(author, this.props.currentAuthor && author.id == this.props.currentAuthor.id);
    });
    menuItems.push({
      id: 'newUser',
      label: 'Add new Author',
      active: true,
      icon: 'glyphicon glyphicon-plus',
      onClick: () => {
        this.props.showCreateNewUserPage({})
      }
    });
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3 col-sm-4'>
            <Menu items={menuItems} header='List of Authors'/>
          </div>
          <div className='col-md-9 col-sm-8'>
            {
              this.props.currentAuthor ? <AuthorEditorWrapper originalAuthor={this.props.originalAuthor} author={this.props.currentAuthor} changes={this.props.changes}/> : null
            }
          </div>
        </div>
      </div>
    );
  }
}

AuthorComponent.propTypes = {
  authors: React.PropTypes.array.isRequired,
  currentAuthor: React.PropTypes.object,
  originalAuthor: React.PropTypes.object,
  changes: React.PropTypes.bool,
  showCreateNewUserPage: React.PropTypes.func.isRequired
};

let mapStateToProps = function (state) {
  return {
    authors: state.authors.authors,
    originalAuthor: state.operation.originalValue,
    currentAuthor: state.operation.modifiedValue,
    changes : state.operation.changes
  };
};

function mapDispatchToProps(dispatch) {
  return {
    showCreateNewUserPage: bindActionCreators(startOperation, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorComponent);
