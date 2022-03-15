export interface ILoginMethod {
  provider: 'google' | 'facebook' | 'userAndPassword'
  providerUserId?: string
  secret?: string
}

export interface IUser {
  firstName: string
  lastName: string
  email: string
  userName: string
  loginMethods: ILoginMethod[]
}



