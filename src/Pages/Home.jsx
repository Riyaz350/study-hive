import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


const Home = () => {


  return (
        <div>
          <Navbar></Navbar>

          <div className="min-h-screen">

          </div>

          <div className=" bottom-0 w-full">
          <Footer></Footer>
          </div>
        </div>
    );
};

export default Home;