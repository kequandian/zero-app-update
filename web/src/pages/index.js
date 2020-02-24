import React from 'react';
import { router } from 'umi';

export default function () {
  router.push('/sys/version');
  return (
    <div>
      跳转中
    </div>
  );
}
