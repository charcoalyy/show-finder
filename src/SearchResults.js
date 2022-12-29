import { useEffect, useState, useContext } from "react"
import { FilterContext } from "./Discover"

const SearchResults = ({ ogList }) => {

    const { filters } = useContext(FilterContext);
    const [ filteredList, setFilteredList ] = useState(null);

    useEffect(() => {
        const add = filters.include;
        const remove = filters.exclude;

        const includeItems = (list, desired) => {
            return list.filter((item) => desired.every(desire => item.includes(desire)))
        };
    
        const excludeItems = (list, desired) => {
            return list.filter((item) => desired.every(desire => !item.includes(desire)))
        };

        setFilteredList(excludeItems(includeItems(ogList, add), remove));
    }, [ogList, filters.include, filters.exclude])

    return(
        <div className="search-results">
            <h3>Filtered list</h3>
            <p>{filters.include.length == 0 && filters.exclude.length == 0 && ogList}</p>
            <p>{(filters.include.length > 0 || filters.exclude.length > 0) && filteredList}</p>
        </div>
    )
}

export default SearchResults;