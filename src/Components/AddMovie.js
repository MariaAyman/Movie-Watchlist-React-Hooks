import React, {useState} from 'react';

const AddMovie = (props) => {
    const [movieTitle, setTitle] = useState('');
    const [movieDescription, setDesc] = useState('');
    const [moviePoster, setPoster] = useState('');
    

    const handleClick = () => {
        //console.log("movie added " + movieTitle + " " + movieDescription + " " + moviePoster);
        console.log(props.movies);
        props.addMovies(movieTitle , movieDescription , moviePoster);
    }

    return(
        <>
            
            <button type="button" className="btn btn-dark m-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add New Movie
            </button>

            
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">New Movie</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Movie Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" value={movieTitle} onChange={(e) => setTitle(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Poster URL</label>
                                <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="" vlaue={moviePoster} onChange={(e) => setPoster(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={movieDescription} onChange={(e) => setDesc(e.target.value)}></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-dark" onClick={handleClick}>Add</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddMovie;