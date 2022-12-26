const FilterButton = ({openFilter, setOpenFilter}) => {
    const handleClick = () => {
        setOpenFilter(!openFilter)
    }

    return(
        // <div className={openFilter ? "filter-button" : "filter-button-full"} onClick={handleClick}>
        //     {openFilter ? <button type="submit" form="filters-form">Find something new</button> : <p>Find something new</p> }
        // </div>

        <div className="filter-button-container">
            {openFilter ? <button type="submit" form="filters-form" className="filter-button-full" onClick={handleClick}>Find something new</button> : <div className="filter-button" onClick={handleClick}>Find something new</div> }
        </div>
    )
}

export default FilterButton;