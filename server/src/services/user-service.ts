import { OAuth2Client } from 'google-auth-library'
import { User } from '../models/user';

const findOrCreate = async (
  { email, firstName, lastName, provider, providerUserId }: 
  { email: string, firstName: string, lastName: string, provider: string, providerUserId: string}) => {
  let user = await User.findOne({ email })
  
  if (!user) {
    return User.create({
      email,
      firstName, 
      lastName,
      loginMethods: [
        {
          provider,
          providerUserId
        }
      ]
    })
  } 

  if(user.loginMethods.some((loginMethod) => loginMethod.provider === provider && loginMethod.providerUserId === providerUserId)) {
    return user
  } else if(!user.loginMethods.some((loginMethod) => loginMethod.provider === provider)) {
    // try to inject loginMethods
    return User.findOneAndUpdate({
      email,
    }, {
      $push: {
        loginMethods: {
          provider,
          providerUserId
        }
      }
    }, { new: true })
  } else {
    throw Error('Invalid credentials')
  }
}

const handleGoogleLogin = async (secret: string) => {
  const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  const ticket = await client.verifyIdToken({
    idToken: secret,
    audience: process.env.GOOGLE_CLIENT_ID
  })
  const payload = ticket.getPayload();
  const { sub: providerUserId, email, given_name: firstName, family_name: lastName } = payload!;
  return findOrCreate({ email: email!, firstName: firstName!, lastName: lastName!, provider: 'google', providerUserId })
}

const handleSocialLogin = ( provider: string, secret: string) => {
  if ( provider === 'google') {
    return handleGoogleLogin(secret)
  } else if ( provider === 'facebook') {
    throw Error("Facebook Login not implemented yet")
  } else {
    throw Error("UsernameAndPassword Login not implemented yet")
  }
}

export { handleSocialLogin }