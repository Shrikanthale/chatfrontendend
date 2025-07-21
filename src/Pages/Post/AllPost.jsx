import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Paper, Typography, Avatar, Button } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import { GetTokenFunc } from '../../utils';
import { useNavigate } from 'react-router-dom';

const AllPost = () => {
    const [posts, setPsots] = useState([]);
    const navigate = useNavigate();

    const getAllPosts = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/post',{
                headers:{
                    Authorization:`Bearer ${GetTokenFunc()}`
                }
            });
            setPsots(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getAllPosts();
    }, []);
    return (
        <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', py: 6, px: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 600, mx: 'auto', mb: 3 }}>
                <Typography variant="h3" sx={{ fontFamily: '"Caveat", cursive', fontWeight: 700, color: 'primary.main', letterSpacing: 2 }}>
                    All Posts
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{ fontWeight: 600, borderRadius: 2, fontFamily: 'inherit', boxShadow: 2 }}
                    onClick={() => navigate('/createpost')}
                >
                    Create Post
                </Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 600, mx: 'auto' }}>
                {posts?.map((post, idx) => (
                    <Paper key={idx} elevation={6} sx={{ p: 3, borderRadius: 4, display: 'flex', alignItems: 'flex-start', gap: 2, boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.17)' }}>
                        <Avatar sx={{ bgcolor: 'secondary.main', width: 48, height: 48, mt: 0.5 }}>
                            <ArticleIcon fontSize="medium" />
                        </Avatar>
                        <Box>
                            <Typography variant="h5" sx={{ fontWeight: 600, color: 'primary.main', fontFamily: 'inherit', mb: 1 }}>
                                {post?.title}
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', fontFamily: 'inherit' }}>
                                {post?.descripition}
                            </Typography>
                        </Box>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
};

export default AllPost;