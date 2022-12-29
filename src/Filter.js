import { Fragment, useContext } from "react"
import DropdownSelect from "./DropdownSelect"
import { FilterContext } from "./Discover"

const Filter = () => {

    const { filters, setFilters } = useContext(FilterContext);

    const handleSubmit = (e) => {
        e.prevent.default()
        console.log(filters)
    }

    return(
        <Fragment>
            <form onSubmit={handleSubmit} className="filter" id="filters-form">
                <h3>Find something new</h3>
                <input type="text" name="keyword" placeholder="Enter keyword(s), separated by a comma and a space"></input>

                <h3>Include</h3>
                    <DropdownSelect under="include" label="Genres" items={["Fantasy", "Action", "Romance", "Horror"]} />
                    <DropdownSelect under="include" label="Tags" items={["Major Character Death", "Gore", "Angst", "Enemies to Lovers"]} />

                <h3>Exclude</h3>
                    <DropdownSelect under="exclude" label="Genres" items={["Fantasy", "Action", "Romance", "Horror"]} />
                    <DropdownSelect under="exclude" label="Tags" items={["Major Character Death", "Gore", "Angst", "Enemies to Lovers"]} />

                <h3>Total episode count</h3>

                <h3>Sort results by</h3>
                <select className="select" onChange={(e) => setFilters(previousFilters => {
                    return {...previousFilters, sort: e.target.value}
                })}>
                    <option>Rating</option>
                    <option>Watch count</option>
                    <option>Publication date</option>
                </select>
            </form>
        </Fragment>
    )
}

export default Filter;

// don't want to re-render dropdown select UNLESS filters list has changed