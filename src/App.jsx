import { useAuth0 } from '@auth0/auth0-react'
import Navbar from "./components/Navbar"; // Esto está bien
import Profile from './components/Profile'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import './App.css'

function App() {
  const { isAuthenticated, isLoading, error } = useAuth0()

  if (isLoading) return <div className="cargando">cargando...</div>
  if (error) return <div>Authentication Error: {error.message}</div>

  return (
    <div className="App">
      {/* 1. AGREGAR ESTA LÍNEA AQUÍ PARA QUE SE MUESTRE */}
      <Navbar /> 

      <h1>Aplicacion Autenticacion</h1>
      
      {isAuthenticated ? (
        <>
          <p>Sesión Iniciada</p>
          <Profile />
          {/* Opcional: Si ya tienes el logout en la Navbar, podrías quitarlo de aquí */}
          <LogoutButton /> 
        </>
      ) : (
        <>
          <p>Inicia sesión para comenzar</p>
          {/* Opcional: Si ya tienes el login en la Navbar, podrías quitarlo de aquí */}
          <LoginButton />
        </>
      )}
    </div>
  );
}

export default App