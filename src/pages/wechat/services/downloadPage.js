import { query, update, remove } from 'kqd-utils/lib/services';
// import { query, get, create, remove, update, patch, createRaw } from 'kqd-utils/lib/services';

const downloadInfoUrl = `/api/downloadPage/downloadInfo`;

export function getDownloadInfoService (params) {
    return query(downloadInfoUrl);
}
