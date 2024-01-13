import Header from './components/Header.jsx';
// import Login from './components/Login.jsx';
import Login from './components/state-login.jsx';
import Signup from './components/sign-up.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Login />
        {/* <Signup/> */}
      </main>
    </>
  );
}

export default App;
