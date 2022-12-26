import { useState } from "react"
import DropdownItem from "./DropdownItem";

const DropdownSelect = ({label, items, under}) => {
    const [ dropdownOpen, setDropdownOpen ] = useState(false);

    return(
        <div className="dropdown-select">
            <p className="dropdown-label" onClick={() => setDropdownOpen(prevDropdown => !prevDropdown)}>{label}</p>
            {dropdownOpen && items.map(item => {
                return(
                    <DropdownItem item={item} under={under} key={item} />
                )
            })}
        </div>
    )
}

export default DropdownSelect;