import { Navigate, Route, Routes } from 'react-router'
import AppProviders from './providers'
import ScrollManager from './ScrollManager'
import LandingPage from '../features/landing/pages/LandingPage'
import RegisterPage from '../features/auth/pages/RegisterPage'
import LoginPage from '../features/auth/pages/LoginPage'
import CheckoutPage from '../features/checkout/pages/CheckoutPage'

export default function App() {
  return (
    <AppProviders>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/checkout/basic" element={<CheckoutPage plan="basic" />} />
        <Route path="/checkout/core" element={<CheckoutPage plan="core" />} />

        <Route path="/Main.dc.html" element={<Navigate to="/" replace />} />
        <Route path="/Registro.dc.html" element={<Navigate to="/registro" replace />} />
        <Route path="/Login.dc.html" element={<Navigate to="/login" replace />} />
        <Route path="/CheckoutBasic.dc.html" element={<Navigate to="/checkout/basic" replace />} />
        <Route path="/CheckoutCore.dc.html" element={<Navigate to="/checkout/core" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppProviders>
  )
}
