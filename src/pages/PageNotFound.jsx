import notFound from "../assets/banner/notFound.png";
import Footer from "./../components/Footer";
const PageNotFound = () => {
  return (
    <main>
      <div className="min-h-[80vh] flex items-center justify-center">
        <img src={notFound} alt="" />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
};

export default PageNotFound;
