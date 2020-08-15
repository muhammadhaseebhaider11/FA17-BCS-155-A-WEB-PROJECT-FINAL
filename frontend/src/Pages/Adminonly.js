import React from 'react';
import {withRouter} from 'react-router-dom';
const Adminonly = (props) => {
    return (  
        <div>
            {props.children}
        </div>
    );
}
export default withRouter(Adminonly);