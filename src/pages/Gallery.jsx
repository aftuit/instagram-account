import React from 'react';
import Main from './Main';
import { data } from '../tools/data';
import { Link } from 'react-router-dom';
const Gallery = () => {

    return (
        <Main>
            <div className="gallery-wrap d-flex">
                {
                    data.map(item =>
                        (item.id === 1) ?
                            <Link to={'/posts'} key={item.id} className="gallery-img">
                                <img src={item.image[0]} className="w-100 h-100" alt="" />
                            </Link> :
                            (item.type === "image") ?
                                <Link to={'/posts'} key={item.id} className="gallery-img">
                                    <img src={item.image} className="w-100 h-100" alt="" />
                                </Link> :
                                <Link to={'/posts'} key={item.id} className="gallery-vid">
                                    <video className="w-100 h-100">
                                        <source src={item.video} />
                                    </video>
                                </Link>
                    )
                }
            </div>
        </Main>
    );
};


export default Gallery;