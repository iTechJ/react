import React from 'react';

/*
  This component contains a logic how to display Read More link
*/
class LinkWithIcon extends React.Component {
  render() {
    return (
      <a href={this.props.linkUrl} target='_blank'></a>
    );
  }
}

/* Names of props should be in camelCase */
LinkWithIcon.propTypes = {
  linkUrl: React.PropTypes.string.isRequired
};

export default LinkWithIcon;
