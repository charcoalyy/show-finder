import { useContext, memo } from "react";
import { FilterContext } from "./Discover";

const DropdownItem = ({item, under}) => {
    const { filters, setFilters } = useContext(FilterContext);

    const handleTick = (e, under, item) => {
        if (e.target.checked) {
            setFilters(previousFilters => {
                return { ...previousFilters, [under]: [ ...filters[under], item]}
            })
        } else {
            let removedVersion = filters[under].filter(x => x !== item)
            setFilters(previousFilters => {
                return { ...previousFilters, [under]: removedVersion}
            })
        }
    }
    
    return(
        <div className="dropdown-item" >
            {filters[under].includes(item) && <input type="checkbox" name={item} onChange={(e) => handleTick(e, under, item)} checked={true}></input>}
            {!filters[under].includes(item) && <input type="checkbox" name={item} onChange={(e) => handleTick(e, under, item)} checked={false}></input>}
            <label className="checkbox-label" htmlFor={item}>{item}</label>
        </div>
    )
}

export default memo(DropdownItem);