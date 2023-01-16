import './styles/App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import {
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
  ForgetPasswordPage,
} from './pages/auth/indexAuth'
import {
  HomePage,
  FacturesPage,
  AppartementsPage,
  ClientsPage,
  ImmeublesPage,
  MessagesPage,
  PaiementsPage,
  ReglagesPage,
} from './pages/dashboard/indexDashboard'
import {
  FormAddPayment,
  FormAddClient,
  FormAddAppartement
} from './components/dashboard/formAdd/index'
import { FormUpdateAppartement, FormUpdateClient, FormPaye } from './components/dashboard/formUpdate/index'
import Layout from './components/dashboard/shared/Layout';
import AuthRequire from './utils/AuthRequire';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='resetpassword' element={<ResetPasswordPage />} />
        <Route path='forgetpassword' element={<ForgetPasswordPage />} />
        
        <Route element={<AuthRequire />}>
          <Route path="dashboard/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="appartement" element={<AppartementsPage />} />
            <Route path="client" element={<ClientsPage />} />
            <Route path="immeuble" element={<ImmeublesPage />} />
            <Route path="message" element={<MessagesPage />} />
            <Route path="paiement/:id" element={<PaiementsPage />} />
            <Route path="reglage" element={<ReglagesPage />} />
            <Route path="facture" element={<FacturesPage />} />
            <Route path="formaddpayment" element={<FormAddPayment />} />
            <Route path="formaddclient" element={<FormAddClient />} />
            <Route path="formaddappartement" element={<FormAddAppartement />} />
            <Route path="formupdateappartement/:id" element={<FormUpdateAppartement />} />
            <Route path="formupdateclient/:id" element={<FormUpdateClient />} />
            <Route path="formpaye/:id" element={<FormPaye />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
