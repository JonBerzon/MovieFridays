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
        let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus. Elementum facilisis leo vel fringilla est. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Ipsum faucibus vitae aliquet nec. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Tincidunt dui ut ornare lectus sit amet est. Facilisis magna etiam tempor orci. Ut morbi tincidunt augue interdum. Cum sociis natoque penatibus et magnis dis parturient. Sit amet consectetur adipiscing elit ut aliquam purus."
        // let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit "

        return(
            <div className="review-parent-div">
                <div className="review-content-flex">
                    <div className="review-avatar-border"></div>
                    <div className="review-content">
                        <div className="review-content-top">
                            <h1>Member Name</h1>
                            <h1>7/10</h1>
                        </div>
                        <hr />
                        {
                            lorem.split(" ").length > 40 ? (
                                <div>
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