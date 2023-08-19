import { Avatar , Button , Paper , Grid , Typography , Container } from '@material-ui/core'
import React , {useState} from 'react'
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import { useDispatch } from 'react-redux';
import { useNavigate  } from "react-router-dom";
import { signin , signup} from '../../actions/auth';

const initialState = {
  firstName:"",
  lastName:"",
  email:"",
  password:"",
  confirmPassword:"",
}

const Auth = () => {
  const [showPassword , setShowPassword] = useState(false);
  const [formData , setFormData] = useState(initialState);

  const [isSignup , setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate  = useNavigate ();

  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(isSignup){
      dispatch(signup(formData , navigate));
    }else{
      dispatch(signin(formData , navigate));

    }
  };
  const handleChange =(e) => {
    setFormData({...formData, [e.target.name]: e.target.value}); 
  };
  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const switchMode =() => {
    setIsSignup((prev) => !prev);
    setShowPassword(false);
  }
  const googleSuccess = async (response) => {
    const userProfile = jwt_decode(response.credential);
    const data = { result: userProfile , token : response.credential };
    try {
      await dispatch({ type : 'AUTH' ,  data  })
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const googleError =(error) => {
    console.log('Google login error:', error);
  };

  return (
    <Container component="main" maxWidth="xs">
    <Paper className={classes.paper} elevation={3}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
          )}
          <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
          <Input
            name="password"
            label="Password"
            handleChange={handleChange}
            type={showPassword ? 'text' : 'password'}
            handleShowPassword={handleShowPassword}
          />
          {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
        </Grid>
        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
          {isSignup ? 'Sign Up' : 'Sign In'}
        </Button>
        <GoogleOAuthProvider clientId="863974819994-cvfu8o0cvj64mli52ksf086ikp616see.apps.googleusercontent.com">
        <GoogleLogin onSuccess={googleSuccess} theme='filled_blue' onFailure={googleError} cookiePolicy={"single_host_origin"} />
      </GoogleOAuthProvider>
        <Grid container justify="flex-end">
          <Grid item>
            <Button onClick={switchMode}>
              {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  </Container>
  )
}

export default Auth