import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import axios from 'axios';
import PageWrapper from './reusable/PageWrapper';
import AdminPortal from './pages/AdminPortal';

function App() {

  const navigator = useNavigate()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [whichModal, setWhichModal] = useState('')
  const [isModalShowing, setIsModalShowing] = useState(false)

  useEffect(() => {

    const email = localStorage.getItem("email")

    if (email !== null) {

      axios.get(`http://localhost:8080/account/getByEmail/${email}`)
        .then((response) => {
          setUser(response.data)
          setTimeout(() => setIsLoading(false), 2000)

          if(response.data.isAgent === true) {
            navigator('/AdminPortal')
          }
        })
        .catch((e) => {
          console.log(e)
          setIsLoading(false)
          navigator('/')
        })
    } else {
      navigator('/')
    }

  }, [])


  return (
    <PageWrapper user={user} setUser={setUser} isLoading={isLoading}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp setUser={setUser} />} />
        <Route path="/SignIn" element={<SignIn setUser={setUser} />} />
        <Route path="/AdminPortal" element={
          <AdminPortal 
            user={user} 
            setUser={setUser} 
            isModalShowing={isModalShowing} 
            setIsModalShowing={setIsModalShowing}
            whichModal={whichModal}
            setWhichModal={setWhichModal}
          />}
        />
      </Routes>

    </PageWrapper>
  );
}

export default App;
