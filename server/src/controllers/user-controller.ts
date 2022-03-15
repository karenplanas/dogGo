import { Request, Response } from 'express'
import { handleSocialLogin } from '../services/user-service';

const socialLogin = async (req: Request,res: Response) => {
  const { provider, secret } = req.body;
  const user = await handleSocialLogin(provider, secret);
  res.status(200);
  res.json({ data: user });
}

export { socialLogin }