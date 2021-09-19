import React, { useEffect } from 'react';
import Common from './Common';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateState } from '../redux/actions/action';
const Comments = (props) => {
    useEffect(() => {
        props.history.push('/comments/' + props.url)
    }, [])

    return (
        <Common history={props.history}>
            <div className="comment_nav py-2 d-flex align-items-center">
                <Link to="/posts"><img style={{ width: "20px" }} src="/assets/icons/left-arrow.svg" alt="" /></Link>
                <h6 className="mb-0 ml-3">Comments</h6>
            </div>
            <div className="comments">
                {
                    (props.post_title.text.length !== 0) &&
                    <div className="title-part d-flex">
                        <div className="img-wrap">
                            <img src={props.post_title.img} alt="" />
                        </div>
                        <div className="text-wrap d-flex">
                            <span>
                                <Link to="/" className="text-decoration-none text-white">
                                    <b>{props.post_title.name}</b>
                                </Link> {props.post_title.text} <br />
                                <span className="d-block text-white-50">{props.post_title.time}  </span>
                            </span>

                        </div>
                        <img style={{ width: "10px" }} className="ml-auto" src="/assets/icons/dislike.svg" alt="" />
                    </div>
                }
                {
                    props.comments.map(value => {
                        return (

                            <div className="comment-part d-flex" key={value.name}>
                                {
                                    (props.comments.length !== 0) &&
                                    <>
                                        <div className="img-wrap ">
                                            <img src={value.img} alt="" />
                                        </div>
                                        <div className="text-wrap d-flex">
                                            <span>
                                                <Link to="/" className="text-decoration-none text-white"><b>{value.name}</b> </Link>
                                                {value.text} <br />
                                                <span className="d-block text-white-50">{value.time}  </span>
                                            </span>
                                        </div>
                                        <img style={{ width: "10px" }} className="ml-auto" src="/assets/icons/dislike.svg" alt="" />
                                    </>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </Common >
    );
};
const mapStateToProps = (state) => {
    return {
        comments: state.instagram.comments,
        post_title: state.instagram.post_title,
        url: state.instagram.url
    }
}
export default connect(mapStateToProps, { updateState })(Comments);