import { useForm } from './hooks/useForm'
import Input from './components/Input'
import Card from './components/Card'

const App = () => {
  const [form, handleChange] = useForm({ name: '', lastName: '' })
  console.log(form)
  return (
    <Card>
      <form>
        <Input label="Name" value={form.name} name="name" onChange={handleChange} placeholder="Name"/>
        <Input label="Last Name" value={form.lastName} name="lastName" onChange={handleChange} placeholder="Last name"/>
      </form>
    </Card>
  )
}

export default App

