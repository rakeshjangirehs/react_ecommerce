import React, { useState } from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {

    const [userCredentials, setCredentials] = useState({email: '', password: ''});

    const { email, password } = userCredentials;

    const handleSubmit = async event=>{        
        emailSignInStart(email, password);  
    }

    const handleChange = event=>{        
        const { name, value } = event.target;
        
        setCredentials({
            ...userCredentials,
            [name]: value
        });       
    }

    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit} autoComplete="off">
                <FormInput 
                    handleChange={handleChange} 
                    label="Email"
                    type="email" 
                    name="email" 
                    value={email} 
                    required/>
                <FormInput 
                    handleChange={handleChange} 
                    label="Password"
                    type="password" 
                    name="password" 
                    value={password} 
                    required/>
                <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                        Sign in with google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
});

export default connect(null, mapDispatchToProps)(SignIn);