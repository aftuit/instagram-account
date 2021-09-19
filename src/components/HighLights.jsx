import React from 'react';
import { highlights } from '../tools/data';
const HighLights = () => {
    return (
        <div className="highlights mt-3">
            <div className="highlight-content">
                {
                    highlights.map(value => {
                        return(
                            <div className="col3 mr-3 text-center" key={value.id}>
                                <img src={value.src} alt="" />
                                <p>{value.title}</p>
                            </div>
                        )
                    })
                }               
            </div>
        </div>
    );
};

export default HighLights;