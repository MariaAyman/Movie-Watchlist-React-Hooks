import React from 'react';
import FilterByRate from './Filter Components/FilterByRate.js';
import FilterByName from './Filter Components/FilterByName.js';

const Filter = (props) => {

    const handleReset = () => {
        props.reset();
    }

    return(
        <div className="container" style={{width: 800}}>
            <div className="row">
                <FilterByRate filterRate={props.filterRate}/>
                <FilterByName filterSearch={props.filterSearch}/>
                <button type="button" className="btn btn-dark align-self-center" onClick={handleReset} style={{width: 200, height: 50}}>Reset</button>
            </div>
        </div>
    );
}

export default Filter;