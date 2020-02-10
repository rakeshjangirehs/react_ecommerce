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
                    linkUrl: 'hats',
                },
                {
                    id: 2,
                    title: 'JACKETS',
                    imageUrl: 'https://www.barts.eu/wp-content/uploads/2019/03/1911_Jamaica-Cap_04-1200x664.png',
                    linkUrl: '',
                },
                {
                    id: 3,
                    title: 'sneakers',
                    imageUrl: 'https://www.barts.eu/wp-content/uploads/2019/03/1911_Jamaica-Cap_04-1200x664.png',
                    linkUrl: '',
                },
                {
                    id: 4,
                    title: 'WOMENS',
                    imageUrl: 'https://www.barts.eu/wp-content/uploads/2019/03/1911_Jamaica-Cap_04-1200x664.png',
                    linkUrl: '',
                    size: 'large',
                },
                {
                    id: 5,
                    title: 'MENS',
                    imageUrl: 'https://www.barts.eu/wp-content/uploads/2019/03/1911_Jamaica-Cap_04-1200x664.png',
                    linkUrl: '',
                    size: 'large',
                },
            ]
        };
    }

    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSection})=>
                        <MenuItem key={id} {...otherSection}/>
                    )
                }
            </div>
        );
    }
}

export default Directory;