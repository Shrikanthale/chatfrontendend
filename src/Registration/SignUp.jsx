import { Box, Paper, TextField, Button, Typography, Avatar, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  const [registeration , setRegistration] = useState({name:"" , email:"" , password:"", gender: ""})

  const handleChange = (e) => {
    setRegistration({...registeration , [e.target.name] : e.target.value})
  }
  const handleGenderChange = (e) => {
    setRegistration({...registeration, gender: e.target.value})
  }
  const handleSignup = async(e) =>{
    e.preventDefault()
    try {
        let profilePic = '';
        if (registeration.gender === 'male') profilePic = 'https://avatar.iran.liara.run/public/boy';
        else if (registeration.gender === 'female') profilePic = 'https://avatar.iran.liara.run/public/girl';
        else profilePic = 'https://avatar.iran.liara.run/public/other';
        const payload = { ...registeration, profilePic };
        await axios.post("http://localhost:8000/api/user/signup", payload)
        setRegistration({name:"", email:"", password:"", gender: ""})
        navigate("/createpost")
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <Paper elevation={8} sx={{ p: 5, borderRadius: 4, minWidth: 350, maxWidth: 400, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}>
        <Avatar sx={{ m: 1, bgcolor: 'primary.main', width: 56, height: 56 }}>
          <LockOutlinedIcon fontSize="large" />
        </Avatar>
        <Typography variant="h4" sx={{ fontFamily: '"Caveat", cursive', fontWeight: 700, mb: 2, color: 'primary.main', letterSpacing: 2 }}>
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSignup} sx={{ width: '100%', mt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Name"
            name="name"
            value={registeration.name}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            InputProps={{ style: { fontFamily: 'inherit' } }}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={registeration.email}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            InputProps={{ style: { fontFamily: 'inherit' } }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={registeration.password}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            InputProps={{ style: { fontFamily: 'inherit' } }}
          />
          <FormControl component="fieldset" required sx={{ mt: 1 }}>
            <FormLabel component="legend" sx={{ fontFamily: 'inherit', color: 'primary.main', mb: 1 }}>Gender</FormLabel>
            <RadioGroup row name="gender" value={registeration.gender} onChange={handleGenderChange} sx={{ justifyContent: 'center' }}>
              <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" sx={{ fontFamily: 'inherit' }} />
              <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" sx={{ fontFamily: 'inherit' }} />
              <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" sx={{ fontFamily: 'inherit' }} />
            </RadioGroup>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2, borderRadius: 2, fontWeight: 600, fontFamily: 'inherit', boxShadow: 3 }}
            fullWidth
          >
            Register
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}

export default SignUp