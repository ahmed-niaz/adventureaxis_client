import Swal from "sweetalert2";

const AddCountryInfo = () => {
  const countryInfo = (e) => {
    e.preventDefault();
    const form = e.target;
    const imageURL = form.imageURL.value;
    const country_name = form.country_name.value;
    const description = form.description.value;

    const countryLandmarks = {
      imageURL,
      country_name,
      description,
    };

    form.reset();

    // send to the server
    fetch(`https://adventureaxis-server.vercel.app/countries`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(countryLandmarks),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <main>
      <form onSubmit={countryInfo} className="lg:w-9/12 mx-auto mt-12">
        <div className="flex lg:flex-row flex-col justify-center items-center  mx-[112px] gap-4 ">
          <div className="w-full">
            <label className="form-control ">
              <div className="label">
                <span className="label-text font-bold">Image URL</span>
              </div>
              <input
                type="text"
                name="imageURL"
                placeholder="Enter image address"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-center items-center mx-[112px] gap-4">
          <div className="w-full">
            <label className="form-control ">
              <div className="label">
                <span className="label-text  font-bold">Country Name</span>
              </div>
              <input
                type="text"
                name="country_name"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className=" mx-[112px]">
          <div className="w-full">
            <label className="form-control ">
              <div className="label">
                <span className="label-text font-bold">Short Description</span>
              </div>
              <input
                type="text"
                name="description"
                placeholder="Short description about the spot"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <input
            type="submit"
            value="Add Tourist Spots"
            className="btn glass bg-[#135D66] w-full text-white text-xl mt-6 mb-20"
          />
        </div>
      </form>
    </main>
  );
};

export default AddCountryInfo;
