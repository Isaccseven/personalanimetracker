import React from 'react';

const Library = (props) => {

    return (
        <>
            {props.favorites.length>0 ?
            <div className="d-flex flex-wrap">
                {
                    props.favorites.map((item, index) => (
                        console.log(item),
                        <div key={index} className="card m-3 shadow-lg p-3 mb-5 bg-body rounded"
                             style={{width: "16rem"}}>
                            <img src={"https://www.aniflix.cc/storage/" + item.cover_portrait}
                                 className="card-img-top img-fluid rounded mx-auto d-block" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text overflow-hidden"
                                   style={{height: "10rem"}}>{item.description}</p>
                            </div>
                            <button className="btn btn-primary" onClick={() => props.likeAnime(item.indexOf(index))}>
                                <i className="bi bi-star"></i>
                            </button>
                        </div>
                    ))
                }
            </div> : <div></div>
            }
        </>
    );
};

export default Library;
