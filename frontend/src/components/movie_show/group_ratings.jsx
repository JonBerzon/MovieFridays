import React from "react";

class GroupRatings extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        let reviews = [8, 2, 3, 10, 6, 3, 5, 6]
        return(
            <div className="group-ratings-div">
                <h1>The New York Mets Ratings</h1>
                <hr />
                <div className="group-ratings-flex">
                    {
                        reviews.map(review =>{
                            return(
                                <div className="tester">
                                    <div className="group-ratings-index">
                                        <h1>Username</h1>
                                        <div className="group-rating-circle">
                                            <h5>{review}</h5>
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