import React from 'react';
import MenuStore from '../../stores/menu.store';
import AuthorsStore from '../../stores/author.store';
import AuthorMenu from './author-menu';
import AuthorEditor from './author-editor';

class AuthorComponent extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.getCurrentState = this.getCurrentState.bind(this);
    this.state = this.getCurrentState();
  }

  componentDidMount() {
    AuthorsStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    AuthorsStore.removeChangeListener(this.onChange);
  }

  getCurrentState() {
    return {
      authors: AuthorsStore.getAuthors() ? AuthorsStore.getAuthors() : []
    }
  }

  onChange() {
    this.setState(this.getCurrentState());
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3 col-sm-4'>
            <AuthorMenu items={this.state.authors}/>
          </div>
          <div className='col-md-9 col-sm-8'>
            <AuthorEditor />
          </div>
        </div>
      </div>
    );
  }
}

AuthorComponent.propTypes = {};

export default AuthorComponent;
