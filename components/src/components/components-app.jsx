import React from 'react';
import TechnologyList from './technology-list';
/*
  General rule is to have only one component declaration per file.
  Having multiplie components in the same file is a choise when they are stateless and used only by main component
  
  Don't use React.createElement - declare your own subclass of React.Component instead
  Always user JSX
*/

/*
  This component represents the whole page
  Name of component should match name of file
*/
class ComponentsApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getCurrentState(); //You cannot use this.setState in constructor!
  }

  getCurrentState() {
    let items = [];
    items.push({
      id: 1,
      caption: 'Webpack',
      usage: 'Использовался в качестве сборщика модулей',
      readMoreLink : 'https://blog.risingstack.com/using-react-with-webpack-tutorial/'
    });
    items.push({
      id: 2,
      caption: 'Twitter Bootstrap',
      usage: 'Использовался для оформления примера',
      readMoreLink : 'http://getbootstrap.com/css/'
    });
    items.push({
      id: 3,
      caption: 'ESLint',
      usage: 'Использовался для статического анализа кода',
      readMoreLink : 'http://eslint.org/docs/about/'
    });
    items.push({
      id: 4,
      caption: 'JSX',
      usage: 'Использовался для генерации разметки',
      readMoreLink : 'https://facebook.github.io/react/docs/jsx-in-depth.html'
    });
    items.push({
      id: 5,
      caption: 'Babel',
      usage: 'Использовался для компиляции EcmaScript5 компилируется в JavaScript',
      readMoreLink : 'https://babeljs.io/docs/learn-es2015/'
    });
    return {
      technologies: items
    }
  }

  /*  Items with no children should be self-closed
      render() should return only one component => use wrappers
  */
  render() {
    return (
     <div>
      <HeaderComponent year='2016' />
      <div className='container' style={{marginTop:'15%'}}>
        <div className='row' >
          <div className='col-md-8 col-md-offset-2'>
            <div className='text-center'>
              <h1 className='text-warning'>Пример приложения ReactJS</h1>
              <small className='text-muted'>(с использованием компонентов)</small>
            </div>
            <TechnologyList technologies={this.state.technologies} />
          </div>
        </div>
        <div className='row' >
          <div className='col-md-8 col-md-offset-2'>
             <div className='text-center' dangerouslySetInnerHTML={{__html: '<h4 class="text-info">This is raw HTML markup</h4><form class="navbar-form navbar-left" style="width:100%" role="search"><div class="form-group"><input type="text" class="form-control" placeholder="Search"></div><button type="submit" class="btn btn-default">Submit</button></form>'}}>
             
             </div>
          </div>
        </div>
      </div>
       <FooterComponent />
     </div>
    );
  }
}

export default ComponentsApp;

/*
  You can use Stateless functions instead of ReactComponents to combine ReactElements.
  Note: It must be a pure function of it's arguments
  Note: It must be stateless
  Note: No Props checking
  Note: No lifecycle methods - no way to work with DOM
*/
function HeaderComponent(props) {
  return (
    <section>
      <div className='container' >
        <div className='row'>
          <div className='col-md-8 col-md-offset-2'>
            <div className='text-center'> <small> Актуально на {props.year} год  </small> </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
  You can define more then one component per JS file, but in general it isn't a good practice
  In this case FooterComponent and HeaderComponent are private components with no state, so that's ok.
*/
class FooterComponent extends React.Component {
  render() {
    return (
      <section>
        
      </section>
    );
  }
}


