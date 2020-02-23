import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{

    componentDidMount = () => {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }
    
    render(){

        const { match, selectIsCollectionFetching, isCollectionLoaded } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
                <Route exact path={`${match.path}/:collectionID`} component={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} />        
            </div>
        );  
    }
}

const mapStateToProps = createStructuredSelector({
    selectIsCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);