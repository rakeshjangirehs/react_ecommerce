import React from 'react';
import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            sections : [
                {
                    id: 1,
                    title: 'Hats',
                    imageUrl: 'https://www.barts.eu/wp-content/uploads/2019/03/1911_Jamaica-Cap_04-1200x664.png',
                },
                {
                    id: 2,
                    title: 'JACKETS',
                    imageUrl: 'https://www.barts.eu/wp-content/uploads/2019/03/1911_Jamaica-Cap_04-1200x664.png',
                },
                {
                    id: 3,
                    title: 'sneakers',
                    imageUrl: 'https://www.barts.eu/wp-content/uploads/2019/03/1911_Jamaica-Cap_04-1200x664.png',
                },
                {
                    id: 4,
                    title: 'WOMENS',
                    imageUrl: 'https://www.barts.eu/wp-content/uploads/2019/03/1911_Jamaica-Cap_04-1200x664.png',
                    size: 'large',
                },
                {
                    id: 5,
                    title: 'MENS',
                    imageUrl: 'https://www.barts.eu/wp-content/uploads/2019/03/1911_Jamaica-Cap_04-1200x664.png',
                    size: 'large',
                },
            ]
        };
    }

    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, title, imageUrl, size})=>
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    )
                }
            </div>
        );
    }
}

export default Directory;