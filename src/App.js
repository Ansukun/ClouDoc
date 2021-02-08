import React from 'react';
import './App.css';
import { auth, provider } from "./firebase";
import { useState } from 'react';
import Header from "./components/header"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"
import Sidebar from "./components/sidebar"
import FilesView from "./components/filesView/FilesView"
import SideIcons from "./components/sideIcons/index"
import GDriveLogo from './media/google-drive-logo.png'

function App() {
  const [user, setUser] = useState({})
  

  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
        console.log(result.user)
      }).catch((error) => {
        alert(error.message);
      });
    } else if (user) {
      auth.signOut().then(() => {
        setUser(null)
      }).catch((err) => alert(err.message))
    }
  }
  
  
  return (
    <div className="app">
      {
        user ? (
          <>
            <Header userPhoto={user.photoURL} />
            <div className="app__main">
              <Sidebar />
              <FilesView />
              <SideIcons />
            </div>
          </>
        ) : (
            <div className='app__login'>
              <img src={GDriveLogo} alt="Google Drive" />
              <button onClick={handleLogin}>Log in to Google Drive</button>
            </div>
          )
      }
    </div>
  );
}

export default App;