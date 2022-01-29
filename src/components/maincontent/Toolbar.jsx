import React, {useEffect, useRef, useState} from 'react';
import Catalog from "./catalog/Catalog";
import Library from "./library/Library";


const Toolbar = () => {

    const baseURL = "https://www.aniflix.cc/api/show/search";
    const [searchValue, setSearchValue] = useState(" ");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);


    async function extracted(searchParameter) {

        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                "Content-Type":"application/json;charset=UTF-8",
                "Accept":"application/json, text/plain, */*"
            },
            body: JSON.stringify({"search":searchParameter}),
            redirect: 'follow'
        });
        const data = await response.json();
        const results = data;
        console.log(results)
        setData(results);
        setLoading(false);
    }

    useEffect(async () => {
        await extracted("Demon Slayer");
    }, []);

    return (
        <div className="container-fluid bg-white p-4">
            <ul className="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-catalog-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-catalog"
                            aria-selected="true">Catalog
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-library-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-library" type="button" role="tab" aria-controls="pills-library"
                            aria-selected="false">Library
                    </button>
                </li>
                <span className="w-50"></span>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" onChange={(e) => setSearchValue(e.target.value)} aria-label="Search"/>
                    <button className="btn btn-primary text-white" onClick={async () => await extracted(searchValue)} type="button">Search</button>
                </form>
            </ul>
        </div>
    );
};

export default Toolbar;
