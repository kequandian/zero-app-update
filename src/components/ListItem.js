import React from 'react';
import styles from './ListItem.css'
const ListItem = ({ data = [], children, style }) => {
    return (
        <div role="list" style={ style }>
            { data.map( (v, i) => {
                return React.cloneElement(children,{
                    key: i,
                    data: v,
                });
            }) }
        </div>
    );
}
export default ListItem;
