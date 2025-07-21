import React, { useState } from 'react';
import axios from 'axios';
import { Box, Paper, TextField, Button, Typography, Avatar } from '@mui/material';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useNavigate } from 'react-router-dom';
import { GetTokenFunc } from '../../utils';

const CreatePost = () => {
    const navigate = useNavigate()
    const [makePost, setMakePost] = useState({ title: '', descripition: '' });
    const handleChange = (e) => {
        setMakePost({ ...makePost, [e.target.name]: e.target.value });
    };
    const handleUploadPost = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/post/create', makePost,{
                headers:{
                    Authorization:`Bearer ${GetTokenFunc()}`
                }
            });
            setMakePost({ title: '', descripition: '' });
            if(response.status === 201 || response.status === 200){
                navigate("/posts")
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
            <Paper elevation={8} sx={{ p: 5, borderRadius: 4, minWidth: 350, maxWidth: 450, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 56, height: 56 }}>
                    <PostAddIcon fontSize="large" />
                </Avatar>
                <Typography variant="h4" sx={{ fontFamily: '"Caveat", cursive', fontWeight: 700, mb: 2, color: 'secondary.main', letterSpacing: 2 }}>
                    Create Post
                </Typography>
                <Box component="form" onSubmit={handleUploadPost} sx={{ width: '100%', mt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Title"
                        name="title"
                        value={makePost.title}
                        onChange={handleChange}
                        fullWidth
                        required
                        variant="outlined"
                        InputProps={{ style: { fontFamily: 'inherit' } }}
                    />
                    <TextField
                        label="descripition"
                        name="descripition"
                        value={makePost.descripition}
                        onChange={handleChange}
                        fullWidth
                        required
                        multiline
                        minRows={3}
                        variant="outlined"
                        InputProps={{ style: { fontFamily: 'inherit' } }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        size="large"
                        sx={{ mt: 2, borderRadius: 2, fontWeight: 600, fontFamily: 'inherit', boxShadow: 3 }}
                        fullWidth
                    >
                        Upload Post
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default CreatePost;
