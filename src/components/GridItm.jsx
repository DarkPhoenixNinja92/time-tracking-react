const GridItm = (props) => {
  return (
    <div className="grid-itm">
      <img src={props.data.url} alt={props.data.title} />
        <h3>{props.data.title}</h3>
        <h4>{props.data.timeframes.daily.current}hrs</h4>
        <div className="previous">
          <p>Last Week - {props.data.timeframes.daily.previous}hrs</p>
        </div>
    </div>
)
}

export default GridItm;