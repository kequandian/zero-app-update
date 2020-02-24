import React from 'react';
import { Button } from 'antd';
import withRouter from 'umi/withRouter';
import router from 'umi/router';

function ActionOnPath(props) {
  const { title, options, location } = props;
  const { query = {} } = options;

  function handleClick() {
    const data = {};
    Object.keys(query).forEach(toKey => {
      const formKey = query[toKey];
      data[toKey] = location.query[formKey] || formKey;
    });
    router.push({
      pathname: options.path,
      query: data,
    });
  }

  return <div>
    <Button onClick={handleClick} type="primary">
      {title}
    </Button>
  </div>
}

export default withRouter(ActionOnPath);