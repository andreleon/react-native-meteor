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
      getMeteorData: options,
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
      return <Component {...this.props} {...this.data} />;
    },
  });
}

export default createContainer;