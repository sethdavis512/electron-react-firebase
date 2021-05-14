import { useEffect, useState } from 'react';
import db from '../firebaseConfig';

const useGetCollection = (collectionName: string) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getCollection = async () => {
            const store = db.firestore();
            const querySnapshot = await store.collection(collectionName).get();
            const data = querySnapshot.docs.map((doc) => doc.data());

            setItems(data);
        };

        getCollection();
    }, [collectionName]);

    return items;
};

export default useGetCollection;
