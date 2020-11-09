import Button from './Button'
import { styles } from './Form'

function SignUp({ signUp, updateFormState }) {
  return (
    <div style={styles.container}>
      <input
        name="username"
        onChange={(e) => {
          updateFormState(e)
        }}
        style={styles.input}
        placeholder="username"
      />
      <input
        type="password"
        name="password"
        onChange={(e) => {
          updateFormState(e)
        }}
        style={styles.input}
        placeholder="password"
      />
      <input
        name="email"
        onChange={(e) => {
          updateFormState(e)
        }}
        style={styles.input}
        placeholder="email"
      />
      <Button onClick={signUp} title="Sign Up" />
    </div>
  )
}

export default SignUp
