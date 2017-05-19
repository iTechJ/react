import React from 'react';
import PropTypes from 'prop-types';

class FormContent extends React.Component {

  handleIsActiveChange(event) {
    //Component is stateless - it only notifies it's parent about the change
    this.props.handleChange('isActive', event.target.checked);
  }

  handleDescriptionChange(event) {
    //Component is stateless - it only notifies it's parent about the change
    this.props.handleChange('description', event.target.value);
  }

  handleSubtitleChange(event) {
    if (this.props.handleSubtitleChange) {
      this.props.handleSubtitleChange(event.target.value);
    }
  }

  /* Component will re-render each time you type something into input fields */
  render() {
    console.log('Re-render - Each time when you type something in input box');
    let tooltipForSubtitle = '<span>If input field has a <b><i>Value</i></b> attribute and has no change listener, then this input will act like <b>read-only</b> <br/ >Try to set <i> isSubtitleReadOnly </i> to true in <b>injector.js</b> </span>';
    return (
      <div>
        <div className='text-center'>
          <h1 className='text-primary text-capitalize'>{this.props.pageTitle} </h1>
          <small className='text-info text-lowercase'>{this.props.subTitle}</small>
        </div>
        <div style={{paddingTop:'10px'}}>
          <form className='form-horizontal'>
            <fieldset>
              <legend>{this.props.help}</legend>
              <div className='form-group'>
                <label htmlFor='subtitle' data-toggle='tooltip' data-html='true' title={tooltipForSubtitle}>Sub Title</label>
                <input id='subtitle' type='text' className='form-control' value={this.props.subTitle} onChange={this.handleSubtitleChange.bind(this)}/>
              </div>
              <div className='form-group'>
                <label htmlFor='description'>Description</label>
                <textarea id='description' className='form-control' value={this.props.details.description} onChange={this.handleDescriptionChange.bind(this)}/>
              </div>
              <div>
                <input type='checkbox' checked={this.props.details.isActive} onChange={this.handleIsActiveChange.bind(this)}/>
                <label style={{paddingLeft: '5px'}}>Is Active?</label>
              </div>
              <div className='form-group'>
                <label htmlFor='applications'>List of applications</label>
                <ul id='applications'>
                  {
                    /*
                      Remember - using index as a Key is a BAD practise.
                      We use it here because list of application is static. Once it can be modified, index as a key isn't the case.
                      Please look at https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
                     */

                    this.props.details.applications.map((item, index) => {
                      return <li key={index}> {item}</li>
                    })
                  }
                </ul>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

FormContent.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  details: PropTypes.shape({
    ruleId: PropTypes.number.isRequired,
    isActive: PropTypes.bool.isRequired,
    applications: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  help: PropTypes.any,
  handleChange: PropTypes.func.isRequired,
  handleSubtitleChange: PropTypes.func
};

FormContent.defaultProps = {
  subTitle: 'You can play with this example'
};

export default FormContent;


