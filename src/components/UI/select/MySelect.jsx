import React from 'react';
import classes from './select.module.css'

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
            className={classes.selectEx}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(item =>
                <option 
                    key={item.value} 
                    value={item.value}
                >
                    {item.name}
                </option>
        )}
        </select>
    );
};

export default MySelect;