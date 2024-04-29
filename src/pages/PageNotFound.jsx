import notFound from "../assets/banner/notFound.png";

const PageNotFound = () => {
  return (
    <main>
      <div className="min-h-screen flex items-center justify-center">
        <img src={notFound} alt="" />
      </div>
    </main>
  );
};

export default PageNotFound;
