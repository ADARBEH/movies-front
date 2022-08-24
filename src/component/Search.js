import React from "react";



class Main extends React.Component {


    render() {
        return (
            <>
                <main class="page-content">
                    
                    {this.props.data && this.props.data.map(item =>
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

export default Main;
