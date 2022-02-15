import { useForm } from './hooks/useForm'
import Input from './components/Input'

const App = () => {
  const [form, handleChange] = useForm({ name: '', lastName: '' })
  console.log(form)
  return (
    <form>
      <Input label="Name" value={form.name} name="name" onChange={handleChange} placeholder="Name"/>
      <Input label="Last Name" value={form.lastName} name="lastName" onChange={handleChange} placeholder="Last name"/>
    </form>
  )
}

export default App

