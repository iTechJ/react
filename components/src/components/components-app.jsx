import React from 'react';
import TechnologyList from './technology-list';
import HeaderComponent from './header';
/*
 General rule is to have only one component declaration per file.
 Having multiplie components in the same file is a choise when they are stateless and used only by main component

 Don't use React.createElement - declare your own subclass of React.Component instead
 Always user JSX
 */

/*
 This component represents the whole page
 Name of component should match name of file
 This component is stateful
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
      readMoreLink: 'https://blog.risingstack.com/using-react-with-webpack-tutorial/'
    });
    items.push({
      id: 2,
      caption: 'Twitter Bootstrap',
      usage: 'Использовался для оформления примера',
      readMoreLink: 'http://getbootstrap.com/css/'
    });
    items.push({
      id: 3,
      caption: 'ESLint',
      usage: 'Использовался для статического анализа кода',
      readMoreLink: 'http://eslint.org/docs/about/'
    });
    items.push({
      id: 4,
      caption: 'JSX',
      usage: 'Использовался для генерации разметки',
      readMoreLink: 'https://facebook.github.io/react/docs/jsx-in-depth.html'
    });
    items.push({
      id: 5,
      caption: 'Babel',
      usage: 'Использовался для компиляции EcmaScript5 компилируется в JavaScript',
      readMoreLink: 'https://babeljs.io/docs/learn-es2015/'
    });
    return {
      technologies: items
    }
  }

  /*
  Method render() should return only one element or false/null => If you need to return more then 1 element, then put them in container
  */
  /*Tags with no children should be self-closed*/
  render() {
    return (
      <div>
        <HeaderComponent year='2016'/>
        <div className='container' style={{marginTop:'15%'}}>
          <div className='row'>
            <div className='col-md-8 col-md-offset-2 text-center'>
              <div>
                <h1 className='text-warning'>Список библиотек и инструментов, часто используемых с ReactJS</h1>
                <small className='text-muted'>(Пример с использованием компонентов)</small>
              </div>
              <TechnologyList technologies={this.state.technologies}/>
              <h3 className='text-danger'>Не волнуйтесь!</h3>
              <p>Простое приложение с их использованием можно <b>сгенерировать:</b> <br /><a>https://github.com/facebookincubator/create-react-app</a> </p>
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
 You can define more then one component per JS file, but in general it isn't a good practice
 In this case FooterComponent is a private components with no state, so it might be ok.
 */
class FooterComponent extends React.Component {
  render() {
    return (
      <section>

      </section>
    );
  }
}


