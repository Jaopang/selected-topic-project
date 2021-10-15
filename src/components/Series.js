import  './Series.css';


function Series(props) {
    const { series, onSeriesClick } = props;
    return (
        <div> 
            <h4>{series.title} </h4>
            <img className = "series-img"  src={series.thumbnailUrl} onClick= {() => {onSeriesClick(series)}}/>
        </div>
    );
}

export default Series;