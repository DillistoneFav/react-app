import React from 'react';
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';
import classes from '../styles/PostFilters.module.css'

const PostFilter = ({filter, setFilter}) => {
    return (
        <div className={classes.filter}>
            <MyInput
                placeholder="Поиск"
                value={filter.query}
                onChange={event => setFilter({...filter, query: event.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка"
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]}
            />
        </div>
    );
};

export default PostFilter;