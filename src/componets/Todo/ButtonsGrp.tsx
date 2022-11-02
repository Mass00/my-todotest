import React from 'react';
import st from './ButtonsGrp.module.css'

export const ButtonsGrp = () => {
    return (
        <div className={st.container}>
            <button>All</button>
            <button>Active</button>
            <button>Complete</button>
        </div>
    );
};
