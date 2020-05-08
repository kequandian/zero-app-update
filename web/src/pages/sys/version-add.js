import React, { useEffect, useState } from 'react';
import Zele from 'zero-element';
import config from './config/add';
import { getToken, saveToken, removeToken } from 'zero-element/lib/utils/request/token';

export default function () {
  const [token, setToken] = useState(
    getToken()
  );

  useEffect(_ => {
    window.onmessage = e => {
      if (typeof e.data === 'string') {
        saveToken({
          token: e.data,
        });
        setToken(getToken());
      }
    };
    return _=> {
      removeToken();
    };
  }, []);


  console.log('使用的 token', token);
  
  return token ?
    <Zele
      namespace="version"
      config={config}
    />
    : null;
}