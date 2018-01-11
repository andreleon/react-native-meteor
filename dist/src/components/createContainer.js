var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Container helper using react-meteor-data.
 */

import React from 'react';
import createReactClass from 'create-react-class';

import Mixin from './Mixin';

function createContainer(options = {}, Component) {
  let expandedOptions = options;
  if (typeof options === 'function') {
    expandedOptions = {
      getMeteorData: options
    };
  }

  const {
    getMeteorData
  } = expandedOptions;

  return createReactClass({
    displayName: 'MeteorDataContainer',
    mixins: [Mixin],
    getMeteorData() {
      return getMeteorData(this.props);
    },
    render() {
      return React.createElement(Component, _extends({}, this.props, this.data));
    }
  });
}

export default createContainer;