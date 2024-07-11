import React from 'react';
import MainLayout from '../../layout/MainLayoutPage/MainLayout';
import Navbar from '../../components/navbar';
import { useLocation } from 'react-router-dom';
import { getRouteTitle } from '../../routing/routes';

const FavoriteContainer = () => {
    return (
        <div>
            Favorites
        </div>
    )
}

function Favorite() {
    const location = useLocation();
    const title = getRouteTitle(location.pathname);
    return (
        <MainLayout content={<FavoriteContainer />} header={<Navbar />} title={title} />
    );
}

export default Favorite;