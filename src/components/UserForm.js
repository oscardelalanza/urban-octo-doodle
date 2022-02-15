import Input from './Input';
import Button from './Button';
import { useForm } from '../hooks/useForm';

const UserForm = ({submit}) => {
  const [form, handleChange, reset] = useForm({ name: '', lastName: '', email: '' })
  const handleSubmit = (e) => {
    e.preventDefault()
    submit(form)
    reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Name" value={form.name} name="name" onChange={handleChange} placeholder="Name"/>
      <Input label="Last Name" value={form.lastName} name="lastName" onChange={handleChange} placeholder="Last name"/>
      <Input label="Email" value={form.email} name="email" onChange={handleChange} placeholder="email"/>
      <Button>Sent</Button>
    </form>
  )
}

export default UserForm
