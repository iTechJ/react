import React from 'react';

class PageContent extends React.Component {

  handleIsActiveChange(event) {
    //Component is statelless - it only notifies it's parent about the change
    this.props.handleChange('isActive', event.target.checked);
  }

  handleDescriptionChange(event) {
    this.props.handleChange('description', event.target.value);
  }

  handleSubtitleChange(event) {
    if (this.props.handleSubtitleChange) {
      this.props.handleSubtitleChange(event.target.value);
    }
  }

  /* Component will be re-rendered each time you type something into text fields*/
  render() {
    console.log('Re-render');
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
                <label>Is Active?</label>
              </div>
              <div className='form-group'>
                <label htmlFor='applications'>List of applications</label>
                <ul id='applications'>
                  {
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

PageContent.propTypes = {
  pageTitle: React.PropTypes.string.isRequired,
  subTitle: React.PropTypes.string,
  details: React.PropTypes.shape({
    ruleId: React.PropTypes.number.isRequired,
    isActive: React.PropTypes.bool.isRequired,
    applications: React.PropTypes.array.isRequired,
    description: React.PropTypes.string.isRequired
  }).isRequired,
  help: React.PropTypes.any,
  handleChange: React.PropTypes.func.isRequired,
  handleSubtitleChange: React.PropTypes.func
};

PageContent.defaultProps = {
  subTitle: 'You can play with this example'
};

export default PageContent;


