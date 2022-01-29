import React, {useState} from 'react';
import Toolbar from "./Toolbar";
import AnimeGridView from "./AnimeGridView";

const MainContent = () => {
    const baseURL = "https://www.aniflix.cc/api/show/search";
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
        setData(results);
        setLoading(false);
    }

    return (
        <div>
            <Toolbar extracted={searchValue => extracted(searchValue)}/>
            <AnimeGridView data={data} loading={loading}/>
        </div>
    );
};

export default MainContent;
