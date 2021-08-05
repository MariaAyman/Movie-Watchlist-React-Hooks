import React, {useState} from 'react';

const FilterByRate = (props) => {
    const [filterRate, setRate] = useState();

    const handleRate = () => {
        props.filterRate(filterRate);
    }

    return(
        <div className="col m-4">
            <label for="customRange2" className="form-label">Filter Rate</label><br/>
            <input type="range" className="form-range" min="0" max="10" id="customRange2" value={filterRate} onChange={(e) => setRate(e.target.value)} style={{width: 200}}></input>
            <div>{filterRate}</div>
            <button type="button" className="btn btn-dark mt-2" onClick={handleRate}>Filter Rate</button>
        </div>
    );
}

export default FilterByRate;