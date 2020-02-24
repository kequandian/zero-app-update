/* eslint-disable no-unused-vars */

import { createModel, getModel } from 'zero-element/lib/Model';
import { query, post, update, remove } from 'zero-element/lib/utils/request';

createModel({
  namespace: 'test',
  state: {
    listData: {
      records: [
        { id: 1, name: 'Test' },
      ],
    },
  },
  effects: {
    async getData({ payload }, { put }) {
      const response = await query(`${payload.api}/${payload.id}`);
      if (response.status === 200) {
        put({
          type: 'save',
          payload: {
            raw: response.data,
          }
        });
      }
    },
  },
});