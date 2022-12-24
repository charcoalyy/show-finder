import { useContext, useState } from "react"
import FilterContext from "./FilterContext";

const DropdownSelect = ({label, items, under}) => {
    const [ dropdownOpen, setDropdownOpen ] = useState(false);
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
        console.log(filters)
    }

    return(
        <div className="dropdown-select">
            <p className="dropdown-label" onClick={() => setDropdownOpen(prevDropdown => !prevDropdown)}>{label}</p>
            {dropdownOpen && items.map(item => {
                return(
                    <div className="dropdown-item" key={item}>
                        <input type="checkbox" name={item} onChange={(e) => handleTick(e, under, item)}></input>
                        <label className="checkbox-container" htmlFor={item}>{item}</label>
                    </div>
                )
            })}
        </div>        
    )
}

export default DropdownSelect;