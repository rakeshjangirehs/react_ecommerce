import React from 'react';
import { Link } from 'react-router-dom';

import './preview-collection.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items, routeName, basePath})=>{    
    
    return(
        <div className="collection-preview">
            <Link className="title" to={`${basePath}/${routeName}`}>{title.toUpperCase()}</Link>
            <div className="preview">
            {
                items.sort(()=>(.5 - Math.random())).slice(0,4).map((item)=>(
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
            </div>
        </div>
    );
}

export default CollectionPreview;