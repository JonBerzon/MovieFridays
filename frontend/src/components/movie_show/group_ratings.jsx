import React from "react";

class GroupRatings extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        // let reviews = [8, 2, 3, 10, 6, 3, 5, 6]
        let {reviews, group} = this.props
        // debugger
        return(
            <div className="group-ratings-div">
                <h1>{group.name}</h1>
                <hr />
                <div className="group-ratings-flex">
                    {
                        reviews.map(review =>{
                            return(
                                <div key={review._id} className="tester">
                                    <div className="group-ratings-index">
                                        <h1>{review.reviewer.username}</h1>
                                        <div className="group-rating-circle">
                                            <h5>{review.rating}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default GroupRatings;