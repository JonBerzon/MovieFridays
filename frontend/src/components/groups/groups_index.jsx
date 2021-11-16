import React from "react";

import PopularContainer from "../popular/popular_container";
import ReviewButtonContainer from '../reviews/review_button_container'


class GroupsIndex extends React.Component{
    render(){
        return(
          <div>
            <PopularContainer />
            <ReviewButtonContainer />
          </div>
        )
    }

}

export default GroupsIndex;