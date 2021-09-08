import './App.css';

import {Link} from 'react-router-dom'
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getData } from './actions/actions';

const Home = (props) => {
    const {genre, isFetching, error} = props;

    // useEffect(() => {
    //     props.getData();
    // },[])

    if(error) {
        return (
            <div className="App">
                <header className="App-header">
                    <h2>Oops! Something Went Wrong: {error}</h2>
                </header>
            </div>
            )
    }
    
    if(isFetching) {
        return (
        <div className="App">
            <header className="App-header">
                <h2>Fetching a genre you've never heard of!</h2>
            </header>
        </div>
        )
    }

    const handleClick = () => {
        props.getData();
        console.log("genre: ",genre)
    }

    return(<div className="App">
        <header className="App-header">
            {genre ? <h1>{genre.toUpperCase()}</h1> : <h1>Welcome to Genrenator!</h1>}
            <button onClick={handleClick} path={"/genre"}>Get A Genre!</button>
        </header>
    </div>)
}

const mapStateToProps = (state) => {
    return {
    genre: state.genre,
    isFetching: state.isFetching,
    error: state.error
    }
}

export default connect(mapStateToProps, {getData})(Home);