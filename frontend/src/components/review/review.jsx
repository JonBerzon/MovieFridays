import React from "react";

class Review extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            body: "show more"
        }
        this.swapShow = this.swapShow.bind(this)
    }

    swapShow(){
        this.setState({body: this.state.body === "show more" ? "show less" : "show more"})
    }


    render(){
        let {body, rating, reviewer} = this.props.review
        let lorem = body

        // debugger
        return(
            <div className="review-parent-div">
                <div className="review-content-flex">
                    <div className="review-avatar-border"> <img src={reviewer.avatar}/> </div>
                    <div className="review-content">
                        <div className="review-content-top">
                            <h1>{reviewer.username}</h1>
                            <h1>{rating}/10</h1>
                        </div>
                        {/* <hr /> */}
                        {
                            lorem.split(" ").length > 40 ? (
                                <div className="test1">
                                    <p
                                        className={this.state.body === "show more" ? "review-content-show-more" : "review-content-show-less"}
                                    >
                                        {lorem.split(" ").slice(0, 40).join(" ")}<span>....</span>
                                    </p>
                                    <p className={this.state.body === "show more" ? "review-content-show-less" : "review-content-show-more"}>
                                        {lorem}
                                    </p>
                                    <span
                                        className="review-show-more-button"
                                        onClick={this.swapShow}
                                    >{this.state.body === "show more" ? "Show more" : "Show less"}</span>
                                </div>
                            ) : (
                                <p>{lorem}</p>
                            )
                        }
                        

                    </div>
                </div>
                


            </div>
        )
    }
}

export default Review;