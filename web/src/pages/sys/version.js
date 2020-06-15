import React from 'react';
import Zele from 'zero-element';
import config from './config/version';
import useIframeToken from '../utils/useIframeToken';

export default function () {
  const [token] = useIframeToken();

  return tok1en ?
    <Zele
      namespace="version"
      config={config}
    />
    : null;
}