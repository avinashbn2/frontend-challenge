import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
import classes from './search.module.css';
type SearchProps = {
    searchKey: HTMLInputTypeAttribute;
    onChange: ChangeEventHandler<HTMLInputElement>;
}
function Search({ searchKey, onChange }: SearchProps) {
    return (
        <input type="text" value={searchKey} className={classes.search} onChange={onChange} />
    )
}

export default Search;