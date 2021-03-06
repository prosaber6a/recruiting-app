import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import React from 'react';

const theme = createTheme();

const Login = (props) => {
    const handleLogin = () => {
        const email = document.querySelector('#email');
        const password = document.querySelector('#password');
        if  (email == "saber.miazy@gmail.com" && password == "saber2020") {
            props.setLogin(true);
        }
    }
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />

                <Grid item xs={false} sm={4} md={7} sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }} />

                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

                    <Box sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign In
                        </Typography>
                        <Box component="form" onSubmit={ false } sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Your Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                type="email"
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="Your Password"
                                name="password"
                                autoComplete="current-password"
                                type="password"
                            />

                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />

                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                Sign In
                            </Button>

                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>

                    </Box>

                </Grid>


            </Grid>
        </ThemeProvider>
    );
};

export default Login;