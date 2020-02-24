/* eslint-disable no-unused-vars */
import ZEleA from 'zero-element-antd';
import model from '@/models';

import router from 'umi/router';

import { set as golbalSet } from 'zero-element-global/lib/global';
import { set as APIConfig } from 'zero-element-global/lib/APIConfig';

import { set as setEndpoint } from 'zero-element/lib/utils/request/endpoint';
import { saveToken, removeToken } from 'zero-element/lib/utils/request/token';

import { set as CSet } from 'zero-element-global/lib/container';
import { set as LASet } from 'zero-element-global/lib/listAction';
import { set as FITSet } from 'zero-element-global/lib/formItemType';
import { set as AITSet } from 'zero-element-global/lib/actionItemType';
import { set as VTSet } from 'zero-element-global/lib/valueType';


import onPath from './listAction/onPath';

import path from './actionItemType/path';

import icon from './valueType/icon';
import vPath from './valueType/path';

import { message } from 'antd';

APIConfig({
  'DEFAULT_current': 1,
  'DEFAULT_pageSize': 10,

  'REQUEST_FIELD_current': 'pageNum',
  'REQUEST_FIELD_pageSize': 'pageSize',

  'RESPONSE_FIELD_current': 'current',
  'RESPONSE_FIELD_pageSize': 'size',
});
golbalSet({
  router: (path) => {
    router.push(path);
  },
  goBack: () => {
    router.goBack();
  },
  Unauthorized: () => {
    removeToken();
    router.push('/login');
  },
  RequestError: ({ data = {} }) => {
    if (data.errors && data.errors.length) {
      data.errors.forEach(msg => {
        message.error(JSON.stringify(msg));
      })
    } else {
      message.error(data.message || '无法连接服务器');
    }
  }
});


if (process.env.NODE_ENV === 'development') {
  setEndpoint('http://localhost:8080');

  saveToken({
    token: '',
  });
}

LASet({
  'onPath': onPath,
});

AITSet({
  path,
});

VTSet({
  icon,
  'path': vPath,
});