import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const useLogin = () => {
  const [email, setEmail] = useState<any>()

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    token && getUser(token)
  }, [])

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      localStorage.setItem('access_token', codeResponse.access_token)
      getUser(codeResponse.access_token)
    },
    onError: (error) => {
      cleanCash()
      console.log('Login Failed:', error)
    },
  })

  const getUser = (access_token: string) => {
    return axios
      .get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          Accept: 'application/json',
        },
      })
      .then((res: any) => {
        console.log(res)
        setEmail(res.data.email)
      })
      .catch((err: any) => console.log(err))
  }

  const logOut = () => {
    googleLogout()
    setEmail(null)
    cleanCash()
  }

  const cleanCash = () => {
    localStorage.removeItem('access_token')
  }

  return { login, logOut, email }
}
