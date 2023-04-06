import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirt = useLoaderData()
    console.log(tshirt)
    return (
        <div>
            <h1>This is Home Page {tshirt.length}</h1>
        </div>
    );
};

export default Home;