import React from 'react';
import Zele from 'zero-element';
import config from './config/version/edit';
import useIframeToken from '../utils/useIframeToken';

export default function () {
  const [token] = useIframeToken();

  return token ?
    <Zele
      namespace="version_edit"
      config={config}
    />
    : null;
}