import React from 'react';
import useGetCollection from '../../hooks/useGetCollection';

const Dashboard = () => {
    const items = useGetCollection(
        process.env.REACT_APP_FIREBASE_DEFAULT_COLLECTION as string
    );

    return (
        <div>
            Dashboard goes here...Oh look, some data =>{' '}
            {JSON.stringify(items, null, 4)}
        </div>
    );
};

export default Dashboard;
