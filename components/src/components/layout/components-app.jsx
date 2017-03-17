import React from 'react';
import FooterComponent from './footer';
import PageContent from './page-content';
/*
 General rule is to have only one component declaration per file.
 Having multiple components in the same file can be the choice if they're stateless and used only by main component
 Don't use React.createElement - declare your own subclass of React.Component instead
 Always use JSX
 */

/*
 This component is application entry point. In specified page template.
 Name of component should match name of file
 */
class ComponentsApp extends React.Component {
  /*
   Method render() should return only one element or false/null => If you need to return more then 1 element, then put them in container
   */
  /*Tags with no children should be self-closed*/
  render() {
    return (
      <div>
        <HeaderComponent />
        <PageContent />
        <FooterComponent year='2017' reactVersion='15.4.2'/>
      </div>
    );
  }
}

export default ComponentsApp;

/*
 You can define more then one component per JS file, but in general it isn't a good practice
 In this case HeaderComponent is a private components with no state, so it might be ok.
 */
class HeaderComponent extends React.Component {
  render() {
    return (
      <header style={{borderBottom: '1px solid #eee;', marginTop: '40px', marginBottom: '40px'}}>
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            <div className='col text-center'>
              <h1 className='text-muted'>Список библиотек и инструментов, часто используемых с ReactJS</h1>
              <small className='text-muted'>(Пример с использованием компонентов)</small>
            </div>
          </div>
        </div>
      </header>
    );
  }
}


