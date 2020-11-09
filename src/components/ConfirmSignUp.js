import Button from './Button'
import { styles } from './Form'

function ConfirmSignUp({ confirmSignUp, updateFormState }) {
  return (
    <div style={styles.container}>
      <input
        name="confirmationCode"
        placeholder="Confirmation Code"
        onChange={(e) => {
          updateFormState(e)
        }}
        style={styles.input}
      />
      <Button onClick={confirmSignUp} title="Confirm Sign Up" />
    </div>
  )
}

export default ConfirmSignUp
