const ShowCard = ({name, desc, image}) => {
    return(
        <div className="show-card">
            <div className="show-card-img">
                <img src={image}></img>
            </div>
            <div className="show-card-text">
                <div className="show-card-text-container">
                    <h4>{name}</h4>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default ShowCard;