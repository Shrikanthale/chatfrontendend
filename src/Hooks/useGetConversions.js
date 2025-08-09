import axios from 'axios';
import React, { useState, useEffect } from 'react';

const useGetConversions = () => {
    const [conversions, setConversion] = useState([]);
    const [loading, setLoading] = useState(false);

    const getConversions = async () => {
        setLoading(true)
        const token = localStorage.getItem("chat-token");

        if (!token) {
            console.log("No token found in localStorage");
            return;
        }

        try {
            const response = await axios.get("http://localhost:8000/api/usersidebar", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setConversion(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getConversions();
    }, []);

    return { loading, conversions };
};

export default useGetConversions;
