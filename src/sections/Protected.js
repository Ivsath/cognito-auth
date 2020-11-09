import Container from '../components/Container'
import protectedRoute from '../hooks/protectedRoute'

function Protected(props) {
  return (
    <Container>
      <h1>Protected route</h1>
    </Container>
  )
}

export default protectedRoute(Protected)
