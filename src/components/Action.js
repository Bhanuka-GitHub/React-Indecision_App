import React from "react";

const Action = (props) => (
        <div>
            <button
                className="big-button" 
                disabled={!props.hasOptions} 
                onClick={props.handlePic}>
                    What should I do?
            </button>
        </div>
    );

export default Action;