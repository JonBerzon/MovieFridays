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

    openModal(obj){
        this.props.openModal(obj)

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
                        {
                            lorem.split(" ").length > 40 ? (
                                <div id="review-content-body">
                                    <p
                                        className={this.state.body === "show more" ? "review-content-show-more" : "review-content-show-less"}
                                    >
                                        {lorem.split(" ").slice(0, 40).join(" ")}<span>....</span>
                                    </p>
                                    <p className={this.state.body === "show more" ? "review-content-show-less" : "review-content-show-more"}>
                                        {lorem}
                                    </p>
                                    <div className="review-bottom-buttons">
                                        <span
                                            className="review-show-more-button"
                                            onClick={this.swapShow}
                                        >{this.state.body === "show more" ? "Show more" : "Show less"}</span>
                                        <div className={this.props.currentUser.id === reviewer._id ? "review-bottom-button-current-user" : "review-bottom-button-hide"}>
                                            <h5 onClick={() => this.openModal({type: "edit", review: this.props.review, movie: this.props.movie})} >Edit</h5>
                                            <h6>|</h6>
                                            <h5 onClick={() => this.props.deleteReview(this.props.review._id)}>Delete</h5>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div>

                                    <p>{lorem}</p>
                                    <div className={this.props.currentUser.id === reviewer._id ? "review-bottom-button-current-user1" : "review-bottom-button-hide"}>
                                        <h5 onClick={() => this.openModal({type: "edit", review: this.props.review, movie: this.props.movie})} >Edit</h5>
                                        <h6>|</h6>
                                            <h5 onClick={() => this.props.deleteReview(this.props.review._id)}>Delete</h5>
                                    </div>
                                </div>
                            )
                        }
                        

                    </div>
                </div>
                


            </div>
        )
    }
}

export default Review;