import { query, update, remove } from 'kqd-utils/lib/services';
// import { query, get, create, remove, update, patch, createRaw } from 'kqd-utils/lib/services';

//获取地址列表 api
const addressUrl = `/rest/contact`;

export function getAddressList (params) {
    return query(addressUrl);
}
