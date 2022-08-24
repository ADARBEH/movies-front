import React from "react";
import axios from "axios";






var url = window.location.pathname;
const id = url.substring(url.lastIndexOf('/') + 1)

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            server: []
        }
    }

    gtmovie = async () => {


        const mainmovies = await axios.get(`https://movie-adarbeh.herokuapp.com/${id}`)
        console.log(mainmovies.data.result.embedUrls)
        this.setState({
            server: mainmovies.data.result.embedUrls
        })
    }



    componentDidMount() {
        this.gtmovie()

    }






    render() {
        return (
            <>

                <main class="page-content">
                    {this.state.server && this.state.server.map(item =>
                        <div class="card" style={{ backgroundColor : "white" }}>
                            <div class="content">
                                <h2 class="title" style={{ color : "black" }}>{item.server}</h2>
                                
                                <button class="btncard"><a href={item.url} target="_blank">Open Server</a></button>
                            </div>
                        </div>

                    )}

                </main>
            </>
        );
    }
}

export default Main;
