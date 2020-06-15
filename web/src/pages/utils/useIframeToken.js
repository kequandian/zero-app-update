import { useState } from 'react';
import { getToken, saveToken, removeToken } from 'zero-element/lib/utils/request/token';
import { useWillMount, useWillUnmount } from 'zero-element/lib/utils/hooks/lifeCycle';

export default function useIframeToken() {
  const [token, setToken] = useState(
    getToken()
  );

  useWillMount(_ => {
    window.addEventListener("message", handleToken, false);

  });
  function handleToken(e) {
    if (typeof e.data === 'object') {
      const { token } = e.data;

      if (token) {
        saveToken({
          token: token,
        });
        setToken(getToken());
      }
    }
  }
  // useWillUnmount(removeToken);

  console.log('使用的 token', token);

  return [token];

}