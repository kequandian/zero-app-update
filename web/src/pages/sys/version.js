import React from 'react';
import Zele from 'zero-element';
import config from './config';

export default function () {
  return <Zele
    namespace="version"
    config={config}
  />
}