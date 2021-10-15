import './SeriesPopup.css';

function SeriesPopup(props) {
    const { series, onBgClick} = props;
    return (
        <div className="series-popup">
            <div className= "series-popup-bg" onClick= {onBgClick} />
            <div className= "series-popup-content">
                <img src={series.fullUrl}/><br></br>
                <h4>{series.title}</h4> 
                <div className= "series-popup-content">
                    <h6>{series.describe}</h6> <br></br><br></br><br></br><br></br>
                </div> 
            </div>
        </div>

    );
}

export default SeriesPopup;