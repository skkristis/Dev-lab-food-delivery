import React from "react";
import './index.scss';

function Button({content, isSubmit}) {
    
    const onClick = () => {
        return
    };

    return <button className="subscriptions__btn" type={isSubmit ? 'submit' : 'button'} onClick={() => onClick()}>
        {content}
    </button>
}

export default Button;