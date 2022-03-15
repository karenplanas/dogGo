import React from 'react'
import { GoogleLogin as BaseGoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
import { config } from '../../config'

// https://dev.to/sivaneshs/add-google-login-to-your-react-apps-in-10-mins-4del

const GoogleLogin : React.FC = () => {

  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    //processLogin({ provider: 'google', accessToken: (res as GoogleLoginResponse).accessToken })
    console.log('Login success', res);
  }

  const onFailure = (res: GoogleLoginResponse | GoogleLoginResponseOffline ) => {
    console.log('Login failed', res);
  }
  
  return (
    <div>
      <BaseGoogleLogin
        clientId={config.GOOGLE_CLIENT_ID}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        />
    </div>
  )
}

export { GoogleLogin }