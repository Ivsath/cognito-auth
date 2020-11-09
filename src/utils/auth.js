import { Auth } from 'aws-amplify'

export async function signIn({ username, password }, setUser) {
  try {
    const user = await Auth.signIn(username, password)
    const userInfo = { username: user.username, ...user.attributes }
    setUser(userInfo)
  } catch (err) {
    console.log('error signing up..', err)
  }
}

export async function signUp({ username, password, email }, updateFormType) {
  try {
    await Auth.signUp({
      username,
      password,
      attributes: { email },
    })
    console.log('sign up success!')
    updateFormType('confirmSignUp')
  } catch (err) {
    console.log('error signing up..', err)
  }
}

export async function confirmSignUp(
  { username, confirmationCode },
  updateFormType,
) {
  try {
    await Auth.confirmSignUp(username, confirmationCode)
    updateFormType('signIn')
  } catch (err) {
    console.log('error signing up..', err)
  }
}

export async function forgotPassword({ username }, updateFormType) {
  try {
    await Auth.forgotPassword(username)
    updateFormType('forgotPasswordSubmit')
  } catch (err) {
    console.log('error submitting username to reset password...', err)
  }
}

export async function forgotPasswordSubmit(
  { username, confirmationCode, password },
  updateFormType,
) {
  try {
    await Auth.forgotPasswordSubmit(username, confirmationCode, password)
    updateFormType('signIn')
  } catch (err) {
    console.log('error updating password... :', err)
  }
}
