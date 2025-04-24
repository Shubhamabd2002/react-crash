import PropTest from "./PropTest"

function App() {
 const data = {
  name: "John Doe",
  age: 30,
  email: "john@mail.com",
  address: {
   street: "123 Main St",
   city: "Anytown",
   state: "CA",
   zip: "12345"
  },
 }
  return (
    <>
      <h1 className='bg-green-400'>Tailwind Test</h1>
      <PropTest data={data}/>
    </>
  )
}

export default App
