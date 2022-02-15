import { useState } from 'react'
import { useForm } from './hooks/useForm'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'
import UserForm from './components/UserForm'

const App = () => {
  const [users, setUsers] = useState([])

  const submit = user => {
    setUsers([
      ...users,
      user
    ])
  }

  return (
    <div style={{ marginTop: '15%'}}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit} />
          </div>
        </Card>
        <Card>
          <ul>
            {users.map(user =>
              <li key={user.email}>{`${user.name} ${user.lastName} ${user.email}`}</li>
            )}
          </ul>
        </Card>
      </Container>
    </div>
  )
}

export default App

