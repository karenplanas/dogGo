import React from 'react'
import { GoogleLogout as BaseGoogleLogout } from 'react-google-login'
import { Navigate } from 'react-router';
import { config } from '../../config'
import { useUserContext } from '../../context/UserContext';

const clientId = config.GOOGLE_CLIENT_ID;

const GoogleLogout: React.FC = () => {

  const { logout } = useUserContext();

  const onSuccess = async () => {
    await logout();
  }
  return (
    <BaseGoogleLogout 
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
      className='GoogleLogin-button'
    />
  )
}

export { GoogleLogout }