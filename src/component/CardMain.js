import React from "react";
import axios from "axios";
import "./CardMain.css"




class CardMain extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }




    getmovie = async () => {

        const mainmovies = await axios.get('https://movie-adarbeh.herokuapp.com/')
        this.setState({
            movies: mainmovies.data
        })

    }


    componentDidMount() {
        this.getmovie()

    };
    render() {
        return (

            <>

                <main class="page-content">
                    {this.state.movies && this.state.movies.map(item =>
                        <div class="card" style={{ backgroundImage: `url(${item.image})` }}>
                            <div class="content">
                                <h2 class="title">{item.title}</h2>
                                <p class="copy">
                                    <div>
                                        <p>{item.year}</p>
                                        <p>{item.genres} {item.rating}</p>
                                    </div>
                                </p>
                                <button class="btncard"><a href={`/${item._id}`}>watch now</a></button>
                            </div>
                        </div>

                    )}

                </main>
            </>
        );
    }
}

export default CardMain;
