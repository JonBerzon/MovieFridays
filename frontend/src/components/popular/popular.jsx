import React from "react";

class Popular extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchPopular();
    }

    render(){
        let {popular} = this.props;
        if (!popular) return null;
        let test = Object.values(popular).slice(0,6)
        // let test = [1,2,3,4,5,6]
        return(
            <div className="popular-parent-div">
                <div className="popular-inner-div">
                    <h1>Popular Now</h1>
                    <hr />
                    <div className="popular-movie-list">
                    {
                        test.map(ele =>{
                            return (
                                <div key={ele} className="popular-movie-index">
                                    {/* <div className="popular-movie-poster"></div> */}
                                    <img src={ele.image} className="popular-movie-poster" />
                                    
                                    <p>10/10 <span>★</span></p>
                                    {/* <h4>Shang-Chi and the Legend of the Ten Rings</h4> */}

                                    <h4>{ele.title}</h4>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>


                

            </div>
        )
    }
}

export default Popular;