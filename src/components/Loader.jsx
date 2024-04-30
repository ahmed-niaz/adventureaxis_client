
import loader from '../../public/loader.json'
import Lottie from "lottie-react";
const Loader = () => {
  return (
    <main className="flex items-center justify-center">
      <Lottie animationData={loader} loop={true} />
    </main>
  );
};

export default Loader;
