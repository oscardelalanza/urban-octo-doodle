import { useForm } from './hooks/useForm'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'

const App = () => {
  const [form, handleChange] = useForm({ name: '', lastName: '', email: '' })
  console.log(form)
  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <form>
            <Input label="Name" value={form.name} name="name" onChange={handleChange} placeholder="Name"/>
            <Input label="Last Name" value={form.lastName} name="lastName" onChange={handleChange} placeholder="Last name"/>
            <Input label="Email" value={form.email} name="email" onChange={handleChange} placeholder="email"/>
            <Button>Sent</Button>
          </form>
        </div>
      </Card>
    </Container>
  )
}

export default App

