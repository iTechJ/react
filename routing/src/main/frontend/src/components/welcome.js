import React from 'react';
import PropTypes from 'prop-types';
import IndexComponent from './index';
import { AUTHORS_URL, GENRES_URL } from '../constants/constants';

class WelcomePage extends React.Component {

  /*
    Please, pay attention at constructor arguments
   */
  constructor(props, context) {
    super(props, context);
  }

  redirectToPage(page) {
    //Example of programming navigation between routes
    this.context.router.replace(page);
  }

  render() {
    return (
      <IndexComponent>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col'>
              <div className='card'>
                <div className='card-header'>
                  <h4 className='card-title'>REDUX</h4>
                </div>
                <div className='card-block'>
                  <h4 className='card-title'>Overview</h4>

                  <p>
                    Redux is a predictable state container for JavaScript apps.
                    It helps you write applications that behave consistently, run in different environments (client,
                    server, and
                    native), and are easy to test. On top of that, it provides a great developer experience, such as
                    live code
                    editing combined with a time traveling debugger.
                    You can use Redux together with React, or with any other view library.
                  </p>

                  <p>Redux evolves the ideas of Flux, but avoids its complexity by taking cues from Elm.</p>
                </div>
                <div className='card-footer'>
                  <a className='btn btn-secondary' target='_blank' href='http://redux.js.org/docs/introduction/'
                     role='button'>View redux docs</a>
                  <button type='button' className='btn btn-info' onClick={this.redirectToPage.bind(this, AUTHORS_URL)}>
                    Authors Page
                  </button>
                  <button type='button' className='btn btn-info' onClick={this.redirectToPage.bind(this, GENRES_URL)}>
                    Genres Page
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IndexComponent>
    );
  }
}

//Router allows you to perform navigation between different routes
//It's available in all components, which declares the following contentTypes, as this.context.router
WelcomePage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default WelcomePage;
