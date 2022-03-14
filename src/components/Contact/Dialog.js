import React from 'react';

const Dialog = (props) => {
    const { message } = props;

    return (
        <section>
            <p className='dialog'>{message}</p>
        </section>
    );
}

export default Dialog;