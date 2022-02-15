import { useForm } from './hooks/useForm';

const App = () => {
  const [form, handleChange] = useForm({ name: '' })
  console.log(form)
  return (
    <form>
      <input name="name" placeholder="Name" value={form.value} onChange={handleChange}/>
    </form>
  )
}

export default App

