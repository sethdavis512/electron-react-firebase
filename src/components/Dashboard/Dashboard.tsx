import React from 'react';
import useGetCollection from '../../hooks/useGetCollection';
import Layout from '../Layout';

const Dashboard = () => {
    const items = useGetCollection(
        process.env.REACT_APP_FIREBASE_DEFAULT_COLLECTION as string
    );

    return (
        <Layout>
            Dashboard goes here...Oh look, some data =>{' '}
            {JSON.stringify(items, null, 4)}
        </Layout>
    );
};

export default Dashboard;
