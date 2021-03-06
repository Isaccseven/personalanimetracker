import {useEffect} from "react";

const Catalog = (props) => {

    return (
        <>
            {props.loading ? <div className="d-flex flex-wrap">
                <div className="card m-3 shadow-lg p-3 mb-5 bg-body rounded" style={{width: "16rem"}} aria-hidden="true">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder col-8"></span>
                        </p>
                        <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
                    </div>
                </div>

            </div> : <div className="d-flex flex-wrap">
                {
                    props.data.map(({id, name, description, cover_portrait}, index) => (
                        <div key={index} className="card m-3 shadow-lg p-3 mb-5 bg-body rounded"
                             style={{width: "16rem"}}>
                            <img src={"https://www.aniflix.cc/storage/" + cover_portrait}
                                 className="card-img-top img-fluid rounded mx-auto d-block" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text overflow-hidden" style={{height: "10rem"}}>{description}</p>
                            </div>
                            <button className="btn btn-primary">
                                <i className="bi bi-star"></i>
                            </button>
                        </div>
                    ))
                }
            </div>}
        </>
    );
};

export default Catalog;
