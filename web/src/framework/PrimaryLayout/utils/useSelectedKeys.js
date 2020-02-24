import { useState, useEffect } from 'react';

export default function useSelectedKeys(path) {
  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(_ => {
    const rst = [path];
    const pathSplit = path.split('/');
    if (pathSplit.length > 2) {
      pathSplit.pop();
      rst.push(pathSplit.join('/'));
    }
    setSelectedKeys(rst);
  }, [path]);

  return selectedKeys;
}