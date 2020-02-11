import React from 'react';

import './preview-collection.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items})=>{    
    
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
            {
                items.sort(()=>(.5 - Math.random())).slice(0,4).map(({id, ...otherItemPorps})=>(
                    <CollectionItem key={id} {...otherItemPorps}/>
                ))
            }
            </div>
        </div>
    );
}

export default CollectionPreview;