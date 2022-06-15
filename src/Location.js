
function Location(props) {
    return (
      <div className="card">
        <img
          src={props.item.imageUrl}
          className="card--image"
          alt="image1"
        ></img>
        <div className="details">
          <span>{props.item.location}</span>
          <h1>{props.item.title}</h1>
          <span>{props.item.startDate}</span> - 
          <span> {props.item.endDate}</span>
          <p>{props.item.description}</p>
        </div>
      </div>
    );
}

export default Location;