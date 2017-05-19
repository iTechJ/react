import React from 'react';
import PropTypes from 'prop-types';
import LinkWithIcon from './link-with-icon';
/*
 This component is a view for specific feature - List of Technologies
 */
class TechnologyList extends React.Component {

  /*
   Use arrow functions as much as possible. They don't change this pointer.
   (a) = > { return 5*a} is approx. the same as function(a) {return 5*a}
   */
  render() {
    let listItems = this.props.technologies.map(item => {
      /*Each dynamically created element must have Key attribute
        Key elements should not be an index of element in array. It should be some unique ID
        React uses Key to handle adding of removal of items from list
      */
      return (
        <li key={item.id}>
          <b>{item.caption}</b> {item.usage}
          <LinkWithIcon linkUrl={item.readMoreLink} icon='glyphicon-share-alt'/>
        </li>
      );
    });
    return (
      <div>
        <ul id='notesList'>
          {listItems}
        </ul>
      </div>
    );
  }
}

TechnologyList.propTypes = {
  technologies: PropTypes.array.isRequired
};

export default TechnologyList;


