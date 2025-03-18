import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Test from './Test.tsx'
import Gap from './Gap.tsx'
import Layout from './Layout.tsx'
import Modal from './Modal.tsx'
import Login from './Login.tsx'
import Logskel from './LogSkel.tsx'
import Acord from './Acord.tsx'
import Dropdown from './DropDown.tsx'
import Inp from './Inp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Inp />
  </StrictMode>,
)
