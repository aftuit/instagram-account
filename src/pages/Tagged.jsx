import React from 'react';
import Main from './Main';
const Tagged = () => {
    return (
        <Main>
            <div className="tag-content text-center mt-3 d-block">
                <img src="/assets/icons/instagram-tag.svg" style={{width: "50px"}} className="mx-auto" alt="" />
                <h6 className="mt-2">Photos and Videos of you</h6>
                <p>When people tag you in photos and videos, they'll appear here</p>
            </div>
        </Main>
    );
};

export default Tagged;