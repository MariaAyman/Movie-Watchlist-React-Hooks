import React, {useState, useEffect} from 'react';
                
const Filter = (props) => {
    const [filterRate, setRate] = useState();
    const [movieName, setName] = useState();

    useEffect(() => {
        if(filterRate != null){
            props.filterRate(filterRate);
        }
    },[filterRate]);

    const handleFilter = () => {
        //props.filterRate(filterRate);
        if(movieName !== undefined){
            props.filter(filterRate, movieName);
        }
    }

    const handleSearch = () =>{
        props.filterSearch(movieName);
    }

    const handleReset = () => {
        props.reset();
    }

    return(
        <div className="container" style={{width: 800}}>
            <div className="row">
                <div className="col m-4">
                    <label for="customRange2" className="form-label">Filter Rate</label><br/>
                    <input type="range" className="form-range" min="0" max="10" id="customRange2" value={filterRate} onChange={(e) => setRate(e.target.value)} style={{width: 200}}></input>
                    <div>{filterRate}</div>
                    <button type="button" className="btn btn-dark mt-2" onClick={handleFilter}>Filter Search/Rate</button>
                </div>
                <div className="col m-4">
                    <label for="customRange2" className="form-label">Search Movie by name:</label>
                    <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="Ex: The House of Gaunt" value={movieName} onChange={(e) => setName(e.target.value)} style={{width: 200}}/>
                    <button type="button" className="btn btn-dark mt-4" onClick={handleSearch}>Search</button>
                </div>
                <button type="button" className="btn btn-dark align-self-center" onClick={handleReset} style={{width: 200, height: 50}}>Reset</button>
            </div>
        </div>
    );
}

export default Filter;
