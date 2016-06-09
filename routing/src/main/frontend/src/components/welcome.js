import React from 'react';

import IndexComponent from './index';

class WelcomePage extends React.Component {

  // Context - what is it? 
  //This is mandatary to use this.context.router
  constructor(props, context) {
    super(props, context);
    this.redirentToBooksPage = this.redirentToBooksPage.bind(this);
  }

  redirentToBooksPage() {
    this.context.router.replace('/books');
  }
  
  render() {
    return (
      <IndexComponent>
        <div className='jumbotron' style={{paddingBottom: '30px', paddingTop: '30px', marginTop: '10px'}}>
          <h1>Router example </h1>
          <p>
            A critical feature in a SPA is navigation between "pages" within the application.
            Of course they are not real pages, since its a Single Page Application, but from the user point of view it looks like that.
            A typical example of a SPA is Gmail where the URL in the browser reflects the state of the application.

            Since we are not loading new pages from the server, we cannot use the regular browser navigation but need to provide one ourselves.
            This is called routing and is provided by many JS frameworks like AngularJS.
            ReactJS itself is not an application framework so there is no ready made router component provided by it.
            But there is a react-router for this purpose.
            The way it works is that you basically create route definitions, register them with the router and off it goes binding your components as the URL changes.
            In this tutorial we have a total of four modules/routes/views just to demonstrate how to use the router.

          </p>
          <p>
            <a className='btn btn-lg btn-primary' target='_blank' href='https://github.com/reactjs/react-router' role='button'>View react-router docs  »</a>
            <button className='brn btn-lg btn-danger' onClick={this.redirentToBooksPage}>Click me for Redirect >></button>
          </p>
        </div>
      </IndexComponent>
    );
  }
}

//This is mandatary to use this.context.router
WelcomePage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default WelcomePage;
