import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
let navigate = useNavigate();
    return (
        <>
        <div>
            <h2>Welcome to Bakery Business</h2>
        </div>
        <div>
        <button>Login</button>
        <button>Create Account</button>
        </div>
        </>
    );
}

export default Home;