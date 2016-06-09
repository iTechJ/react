import React from 'react';

/*
  This component contains a logic how to display Read More link
*/
class LinkWithIcon extends React.Component {
  render() {
    return (
      <a href={this.props.linkUrl} target='_blank'><span className={'glyphicon ' + this.props.icon}></span></a>
    );
  }
}

/* Names of props should be in camelCase */
LinkWithIcon.propTypes = {
  icon: React.PropTypes.string.isRequired,
  linkUrl : React.PropTypes.string.isRequired
};

export default LinkWithIcon;