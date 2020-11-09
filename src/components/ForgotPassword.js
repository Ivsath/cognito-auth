import Button from './Button'
import { styles } from './Form'

function ForgotPassword({ forgotPassword, updateFormState }) {
  return (
    <div style={styles.container}>
      <input
        name="username"
        placeholder="Username"
        onChange={(e) => {
          updateFormState(e)
        }}
        style={styles.input}
      />
      <Button onClick={forgotPassword} title="Reset password" />
    </div>
  )
}

export default ForgotPassword
