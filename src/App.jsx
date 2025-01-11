import Header from "./components/Header"

const App = () => {
  console.log(import.meta.env.VITE_APPWRITE_URL)
  return (
    <>
      <Header />
    </>
  )
}

export default App