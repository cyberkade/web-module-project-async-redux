import './App.css';
import { connect } from 'react-redux';
import { getData } from './actions/actions';

const Home = (props) => {
    const {genre, isFetching, error} = props;

    if(error) {
        return (
            <div className="App">
                <header className="App-header">
                    <h2 className ="appended">Oops! Something Went Wrong: {error}</h2>
                </header>
            </div>
            )
    }
    
    if(isFetching) {
        return (
        <div className="App">
            <header className="App-header">
                <h2 className ="appended">Grabbing a genre!</h2>
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
            {genre ? <h1 className ="appended">{genre.toUpperCase()}</h1> : <h1>Welcome to Genrenator!</h1>}
            <button onClick={handleClick} path={"/genre"}> Get a Random Genre</button>
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