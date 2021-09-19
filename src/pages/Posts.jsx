import React, { useState } from 'react';
import Common from './Common.jsx';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getComments } from '../redux/actions/action.jsx';
import Slider from "react-slick";
import { data } from '../tools/data.js';

const Posts = (props) => {
    const [values, setValues] = useState(data)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const getLikes = (item) => {
        setValues([...values].map(object => {
            if(object.id === item.id){
                return{
                    ...object,
                    liked: !object.liked
                }
            } else{
                return object
            }
        }))
    }

    return (
        <Common history={props.history}>
            <div className="post-nav py-2 d-flex align-items-center">
                <Link to="/"><img style={{ width: "20px" }} src="/assets/icons/left-arrow.svg" alt="" /></Link>
                <h6 className="mb-0 ml-3">Posts</h6>
            </div>
            <div className="posts-content">
                {
                    values.map(item => {
                        return (
                            <div className="w-100" key={item.time}>
                                <div className="post-top mb-3 py-3 d-flex align-items-center justify-content-between" >
                                    <div className="d-flex align-items-center">
                                        <img src="/assets/media/profile-photo.jpg" alt="" />
                                        <Link to="/" className="text-white text-decoration-none ml-2">
                                            <b>farrux__aktamov</b>
                                        </Link>
                                    </div>
                                    <img src="/assets/icons/post-menu.svg" alt="" />
                                </div>

                                {
                                    (item.id === 1) &&
                                    <>
                                        <Slider {...settings} className="carousel__wrapper" id={item.id}>
                                            {
                                                item.image.map(photo => {
                                                    return (
                                                        <img onDoubleClick={()=>getLikes(item)} key={item.id} id={item.id} src={photo} alt="" className="w-100" />
                                                    )
                                                })
                                            }
                                        </Slider>
                                    </>}
                                {
                                    (item.type === "image") ?
                                        <img id={item.id} src={item.image} alt="" onDoubleClick={()=>getLikes(item)} className="w-100" /> :
                                        <video
                                            id={item.id}
                                            controls
                                            loop
                                            muted={true}
                                            autoPlay={true}
                                            className="w-100"
                                            onDoubleClick={()=>getLikes(item)}
                                        >
                                            <source src={item.video} type="video/mp4" />
                                        </video>
                                }
                                <div className="bottom-links d-flex justify-content-between">
                                    <div className="social d-flex">
                                        <img
                                            src={item.liked ? "/assets/icons/liked.svg" : "/assets/icons/dislike.svg"}
                                            alt=""
                                            className="mr-3 my-1 ml-1"
                                            onClick={() => {
                                                getLikes(item)
                                            }}
                                        />
                                        <img
                                            src="/assets/icons/comment.svg"
                                            alt=""
                                            className="mr-3 my-1"
                                            onClick={() => props.getComments(item.comments, item.title, item.id, props.history)}
                                        />
                                        <img
                                            src="/assets/icons/share.svg"
                                            alt=""
                                            className="mr-3 my-1"
                                        />

                                    </div>
                                    <img
                                        src={!item.saved ? "/assets/icons/not-save.svg" : "/assets/icons/saved.svg"}
                                        className="mx-2 my-1"
                                        alt=""
                                        onClick={() => {
                                            setValues([...values].map(object => {
                                                if(object.id === item.id){
                                                    return{
                                                        ...object,
                                                        saved: !object.saved
                                                    }
                                                } else{
                                                    return object
                                                }
                                            }))
                                        }}
                                    />
                                </div>
                                <div className="post__down__part">
                                    <p className="likes mb-0">{item.likes} likes • Liked by <Link to="/" className="text-white text-decoration-none"><b>farrux__aktamov</b></Link></p>
                                    <p className="mb-3"><Link to="/" className="text-white text-decoration-none"><b>{item.title.name} </b></Link> {item.title.text}</p>
                                </div>
                            </div>
                        )
                    })

                }
            </div>
        </Common>
    );
};

export default connect(null, { getComments })(Posts);