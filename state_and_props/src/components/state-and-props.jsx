import $ from 'jquery';
import React from 'react';
import FormContent from './form-content';

class StatePropsApp extends React.Component {

  constructor(props) {
    super(props);
    //Bind functions in constructor if they have no dynamic params. As a result there will be only one instance of this function in scope
    this.onCurrentPageDetailsChange = this.onCurrentPageDetailsChange.bind(this);
    this.onSubTitleChange = this.onSubTitleChange.bind(this);

    //You cannot call this.setState in constructor
    this.state = this.getCurrentState();
  }

  /*
   State is just an object
   In general, it should be flat - it's a good practise to avoid object fields.
   Having object in state might be useful for form data
  */
  getCurrentState() {
    return {
      pageSubTitle: 'Some code samples',  //Comment this line to see default props
      currentPageDetails: {
        isActive: true,
        ruleId: 12,
        applications: ['File structure', 'Design principles'],
        description: 'Some text'
      }
    };
  }
  /*
   Perform any DOM manipulations ONLY when component was rendered (in componentDidMount and componentDidUpdate)
   Using jQuery with React isn't a good practise, but it is allowed sometimes.
   Never use jQuery for anything that can be done with React (for example, do not create elements using jQuery)
   */
  componentDidMount() {
    $('body').tooltip({
      selector: "[data-toggle='tooltip']"
    });
  }

  onCurrentPageDetailsChange(fieldName, newValue) {
    /*
     This is the only way to update field of nested state object
     Be sure to immediately call this.setState(this.state)
     */
    this.state.currentPageDetails[fieldName] = newValue;
    this.setState(this.state);
    //Never call this.state after calling this.setState()
  }

  onSubTitleChange(newValue) {
    //If state is flat, you can pass a delta object to this.setState method
    this.setState({pageSubTitle: newValue});
  }

  render() {
    const help = <span>Please pay attention at that form component <b>has not state</b> in this example</span>;
    //As you can see, this string is used with dangerouslySetInnerHTML attribute. It's value must be object with field __html.
    //dangerouslySetInnerHTML has limitations and sometimes cannot be used. Please review documentation for additional details.
    const rawHTML = '<h4 class="text-info">This is raw HTML markup</h4><div class="navbar-form navbar-left" style="width:100%" role="search"><div class="form-group"><input type="text" class="form-control" placeholder="Search"></div><button type="button" class="btn btn-primary">Submit</button></div>';
    return (
      <div>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <div className='text-center' dangerouslySetInnerHTML={{__html: rawHTML}}>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-md-8 col-sm-10'>
              <FormContent pageTitle={this.props.pageTitle} subTitle={this.state.pageSubTitle} help={help}
                           details={this.state.currentPageDetails} handleChange={this.onCurrentPageDetailsChange}
                           handleSubtitleChange={this.props.isSubtitleReadOnly ? null : this.onSubTitleChange}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

StatePropsApp.propTypes = {
  pageTitle: React.PropTypes.string.isRequired,
  isSubtitleReadOnly: React.PropTypes.bool.isRequired
};

export default StatePropsApp;
