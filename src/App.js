import React from "react";
import './App.css';
import AppHeader from './components/AppHeader';
import Series from './components/Series';
import seriess from './data/seriess';
import {useState} from "react";
import SeriesPopup from './components/SeriesPopup';
import AppSearch from './components/AppSearch';



function App() {
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [searchText, setSearchText] = useState('');
  
  function onSeriesOpenClick(theseries) {
    setSelectedSeries(theseries);
  }
  function onSeriesCloseClick() {
    setSelectedSeries(null);
  }
  const filteredSeries = seriess.filter((series) => {
    return series.title.includes(searchText);
  })
  const seriesElements = filteredSeries.map((series, index) => {
    return <Series key={index} series={series} onSeriesClick= {onSeriesOpenClick} />;
  });

  let seriesPopup = null;
  if (!!selectedSeries){
    seriesPopup=<SeriesPopup series ={selectedSeries} onBgClick= {onSeriesCloseClick}/>

  }

  return (
    <section className="app-section">
      <div className="App">
       <AppHeader/>
         <div className="app-container">
            <AppSearch value={searchText} onValueChange= {setSearchText} />
            <div className="app-grid">
              {seriesElements}
            </div>
        </div>
              {seriesPopup}
      </div>
    </section>
  );
}

export default App;
