const ShowCard = ({name, desc, image}) => {
    return(
        <div className="show-card">
            <div className="show-card-img">
                <img src={image}></img>
            </div>
            <div className="show-card-text">
                <h4>{name}</h4>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default ShowCard;