import { useState } from "react"

export const SearchBox = ({searchName}) => {

    const [search, setSearch] = useState('');

    const handleNameChange = evt => {
        setSearch(evt.currentTarget.value.toLowerCase() );
    }

    const handleSubmit = evt => {
        evt.preventDefault();

        if (search.trim() === '') {
            alert('Введите корректное имя');
            return;
        }

        searchName(search);
        setSearch('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={search} onChange={handleNameChange} />
            <button type="submit">Search</button>
        </form>
    )
}