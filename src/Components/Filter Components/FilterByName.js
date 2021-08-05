import React, {useState} from 'react';

const FilterByName = (props) => {
    const [movieName, setName] = useState();

    const handleSearch = () =>{
        console.log(movieName);
        props.filterSearch(movieName);
    }

    return(
        <div className="col m-4">
            <label for="customRange2" className="form-label">Search Movie by name:</label>
            <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Ex: The House of Gaunt" value={movieName} onChange={(e) => setName(e.target.value)} style={{width: 200}}/>
            <button type="button" className="btn btn-dark mt-4" onClick={handleSearch}>Search</button>
        </div>
    );
}

export default FilterByName;