import router from 'umi/router';

export default function onPath({ options, record }) {
  const { path, query = { id: 'id' } } = options;
  const data = {};
  Object.keys(query).forEach(toKey => {
    const formKey = query[toKey];
    data[toKey] = record[formKey] || formKey;
  });

  router.push({
    pathname: path,
    query: data,
  });
}