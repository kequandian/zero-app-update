import React from 'react';

export default ({ padding, children }) => {
  const style = {
    width: '100%',
    background: '#fff',
    padding: `${ padding || '0' }em`,
  }
  return(
    <div style={ style }>
      { children }
    </div>
  );
}
