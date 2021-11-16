import React from "react";

import PopularContainer from "../popular/popular_container";
import ModalButtonContainer from '../modal/modal_button_container'


class GroupsIndex extends React.Component{
    render(){
        return(
          <div>
            <PopularContainer />
            <ModalButtonContainer modalType={"group"} />
          </div>
        )
    }

}

export default GroupsIndex;