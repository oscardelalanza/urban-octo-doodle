import { useForm } from './hooks/useForm'
import Input from './components/Input'

const App = () => {
  const [form, handleChange] = useForm({ name: '' })
  console.log(form)
  return (
    <form>
      <Input label="Name" value={form.name} name="name" onChange={handleChange} placeholder="Name"/>
    </form>
  )
}

export default App

