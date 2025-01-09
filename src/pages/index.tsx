import Header from "../components/Header"
import Cep from "../components/cep"
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Cep />
    </div>
  );
}
