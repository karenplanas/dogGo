import React from 'react'
import { GoogleLogin as BaseGoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
import { useNavigate } from 'react-router'
import { config } from '../../config'
import { useUserContext } from '../../context/UserContext'
import './GoogleLogin.css'

// https://dev.to/sivaneshs/add-google-login-to-your-react-apps-in-10-mins-4del

const GoogleLogin : React.FC = () => {
  const { socialLogin } = useUserContext()
  const navigate = useNavigate();

  const onSuccess = async (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    await socialLogin({
      provider: 'google',
      secret: (res as GoogleLoginResponse).tokenId
    })
    navigate("/");
  }

  const onFailure = (res: GoogleLoginResponse | GoogleLoginResponseOffline ) => {
    console.log('Login failed', res);
  }
  
  return (
    <BaseGoogleLogin
      clientId={config.GOOGLE_CLIENT_ID}
      buttonText='Login with Google'
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      className='GoogleLogin-button'
    />
  )
}

export { GoogleLogin }