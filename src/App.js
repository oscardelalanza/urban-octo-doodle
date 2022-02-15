import { useState } from 'react'
import { useForm } from './hooks/useForm'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'

const App = () => {
  const [users, setUsers] = useState([])
  const [form, handleChange, reset] = useForm({ name: '', lastName: '', email: '' })

  const submit = ev => {
    ev.preventDefault()
    setUsers([
      ...users,
      form
    ])
    reset()
  }

  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <form onSubmit={submit}>
            <Input label="Name" value={form.name} name="name" onChange={handleChange} placeholder="Name"/>
            <Input label="Last Name" value={form.lastName} name="lastName" onChange={handleChange} placeholder="Last name"/>
            <Input label="Email" value={form.email} name="email" onChange={handleChange} placeholder="email"/>
            <Button>Sent</Button>
          </form>
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
  )
}

export default App

