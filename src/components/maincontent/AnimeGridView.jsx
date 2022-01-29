import React, {useState} from 'react';
import Catalog from "./catalog/Catalog";
import Library from "./library/Library";

const AnimeGridView = (props) => {
    const [favorite, setFavorite] = useState([]);

    console.log(favorite);

    return (
        <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                 aria-labelledby="pills-catalog-tab">
                <Catalog data={props.data} loading={props.loading} likeAnime={favorite => setFavorite(favorite)}/>
            </div>
            <div className="tab-pane fade" id="pills-library" role="tabpanel"
                 aria-labelledby="pills-library-tab">
                <Library favorites={favorite}/>
            </div>
        </div>
    );
};

export default AnimeGridView;
