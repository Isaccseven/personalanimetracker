import React from 'react';
import Toolbar from "./Toolbar";
import AnimeGridView from "./AnimeGridView";

const MainContent = () => {

    return (
        <div>
            <Toolbar/>
            <AnimeGridView data={data} loading={loading}/>
        </div>
    );
};

export default MainContent;
