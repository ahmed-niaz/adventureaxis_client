import { FadeLoader } from "react-spinners";
const Loader = () => {
  return (
    <main className="flex items-center justify-center">
      <FadeLoader size={200} color="#165D66" />
    </main>
  );
};

export default Loader;
