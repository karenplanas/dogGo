import { Schema, model } from 'mongoose'

interface ILoginMethod {
  provider: 'google' | 'facebook' | 'userAndPassword'
  providerUserId: string
  secret?: string
}

const loginMethodSchema = new Schema<ILoginMethod>({
  provider: { type: String },
  providerUserId: { type: String },
  secret: { type: String}
})

interface IUser {
  firstName: string
  lastName: string
  email: string
  userName: string
  loginMethods: ILoginMethod[]
}

const userSchema = new Schema<IUser>({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  userName: { type: String },
  loginMethods: { type: [loginMethodSchema] }
})

const User = model<IUser>('user', userSchema);

export { User };