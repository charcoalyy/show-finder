import { createContext, Fragment, useState } from "react"
import DropdownSelect from "./DropdownSelect"
import FilterContext from "./FilterContext"

const Filter = () => {

    const [ filters, setFilters ] = useState({
        include: [],
        exclude: [],
        sort: null
    })

    const handleSubmit = (e) => {
        e.prevent.default()
    }

    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <h3>Find something new to watch</h3>
                <input type="text" name="keyword" placeholder="Enter keyword(s)"></input>

            <FilterContext.Provider value={{filters, setFilters}}>
                <h3>Include</h3>
                    <DropdownSelect under="include" label="Genres" items={["Fantasy", "Action", "Romance", "Horror"]} />
                    <DropdownSelect under="include" label="Tags" items={["Major Character Death", "Gore", "Angst", "Enemies to Lovers"]} />

                <h3>Exclude</h3>
                    <DropdownSelect under="exclude" label="Genres" items={["Fantasy", "Action", "Romance", "Horror"]} />
                    <DropdownSelect under="exclude" label="Tags" items={["Major Character Death", "Gore", "Angst", "Enemies to Lovers"]} />

                <h3>Total episode count</h3>

                <h3>Sort results by</h3>
            </FilterContext.Provider>
            </form>
        </Fragment>
    )
}

export default Filter;