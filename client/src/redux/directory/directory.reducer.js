const INITIAL_STATE = {
    sections : [
        {
            id: 1,
            title: 'hats',
            imageUrl: 'https://www.barts.eu/wp-content/uploads/2019/03/1911_Jamaica-Cap_04-1200x664.png',
            linkUrl: 'shop/hats',
        },
        {
            id: 2,
            title: 'jackets',
            imageUrl: 'https://www.barts.eu/wp-content/uploads/2019/03/1911_Jamaica-Cap_04-1200x664.png',
            linkUrl: 'shop/jackets',
        },
        {
            id: 3,
            title: 'sneakers',
            imageUrl: 'https://www.barts.eu/wp-content/uploads/2019/03/1911_Jamaica-Cap_04-1200x664.png',
            linkUrl: 'shop/sneakers',
        },
        {
            id: 4,
            title: 'womens',
            imageUrl: 'https://www.barts.eu/wp-content/uploads/2019/03/1911_Jamaica-Cap_04-1200x664.png',
            linkUrl: 'shop/womens',
            size: 'large',
        },
        {
            id: 5,
            title: 'mens',
            imageUrl: 'https://www.barts.eu/wp-content/uploads/2019/03/1911_Jamaica-Cap_04-1200x664.png',
            linkUrl: 'shop/mens',
            size: 'large',
        },
    ]
};

const directoryReducer = (state=INITIAL_STATE, action) => {
    
    switch (action.type){
        default:
            return state;
    }
}

export default directoryReducer;