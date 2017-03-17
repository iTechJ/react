import React from 'react';
import TechnologyList from './../common/technology-list';
import GeneratorInformation from '../common/generator-info';

/*
 This component is stateful.
 It renders main content of the page
 */
class PageContent extends React.Component {

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
  * Try to keep sub-components used by render() on the same level of abstraction.
  * If markup of  <GeneratorInformation /> were be inlined here, it would cause neighborhood of
  * abstract <TechnologyList /> and concrete JSX markup, which isn't a good practise.
  */
  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8' style={{minHeight: '80%'}}>
            <TechnologyList technologies={this.state.technologies}/>
            <GeneratorInformation link='https://github.com/facebookincubator/create-react-app'/>
          </div>
        </div>
      </div>
    );
  }
}

export default PageContent;
