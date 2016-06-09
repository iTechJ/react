import React from 'react';
import PageContent from './page-content';
import $ from 'jquery';

class StatePropsApp extends React.Component {

  /*
   Perform any DOM manipulattions ONLY when component was rendered
   */
  componentDidMount() {
    $('body').tooltip({
      selector: "[data-toggle='tooltip']"
    });
  }

  constructor(props) {
    super(props);
    //Bind functions in constructor if they have no dynamic params. As a result there will be only one instance of this function in scope
    this.onCurrentPageDetailsChange = this.onCurrentPageDetailsChange.bind(this);
    this.onSubTitleChange = this.onSubTitleChange.bind(this);

    //No way to use this.setState in constructor
    this.state = this.getCurrentState();
  }

  /*
   In general, state should be flat. 
   Having object in state might be usefull for form data
   State is just an object
   */
  getCurrentState() {
    return {
      pageSubTitle: 'Some code samples',  //Comment this line to see default props
      currentPageDetails: {
        isActive: true,
        ruleId: 12,
        applications: ['File structure', 'Design principes'],
        description: 'Some text'
      }
    };
  }

  onCurrentPageDetailsChange(fieldName, newValue) {
    /*
     This is the only way to update field of nested state object
     Be sure to immediatelly call this.setState(this.state)
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
    let help = <span> Please pay attention at that form component <b>has not state</b> in this example</span>;
    return (
      <div>
        <div className='container' style={{paddingTop:'10%'}}>
          <div className='row'>
            <div className='col-md-8 col-md-offset-2 col-sm-10  col-sm-offset-1'>
              <PageContent pageTitle={this.props.pageTitle} subTitle={this.state.pageSubTitle} help={help}
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