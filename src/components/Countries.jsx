import bd from '../assets/country/Bangladesh.jpg'
import malaysia from '../assets/country/malaysia.jpg'
import cambodia from '../assets/country/combodia.jpg'
import indonesia from '../assets/country/indonesia.jpg'
import thailand from '../assets/country/thailand.jpg'
import vietnam from '../assets/country/viatenam.jpg'
const Countries = () => {
  return (
    <main className='container mx-auto my-24'>
      <h2 >You Can Visit This Country</h2>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="card w-full bg-base-100 shadow-xl image-full h-[340px]">
          <figure>
            <img className='w-full' src={thailand} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center text-white font-extrabold text-4xl">Thailand</h2>
            <p className='text-sm font-bold my-6'>Renowned for its golden temples, bustling markets, and idyllic beaches, Thailand offers something for every type of traveler. From the bustling streets of Bangkok to the tranquil islands of Phuket and Koh Samui, visitors can indulge in delicious street food, experience traditional Thai massage, and explore ancient ruins and lush jungles.</p>
            <div className="card-actions justify-center">
              <button className="btn glass w-full bg-[#165D66] text-white">View Details</button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl image-full h-[340px]">
          <figure>
            <img className='w-full' src={bd} alt="Bangladesh" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center text-white font-extrabold text-4xl">Bangladesh</h2>
            <p className='text-sm font-bold my-8'>Known for its lush green landscapes, vibrant culture, and historical landmarks such as the Sundarbans mangrove forest and the ancient city of Paharpur. Visitors can explore bustling markets, experience traditional Bengali cuisine, and discover the rich heritage of this </p>
            <div className="card-actions justify-center">
              <button className="btn glass w-full bg-[#165D66] text-white">View Details</button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl image-full h-[340px]">
          <figure>
            <img className='w-full' src={malaysia} alt="Malaysia" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center text-white font-extrabold text-4xl">Malaysia</h2>
            <p className='text-sm font-bold my-6'>A melting pot of cultures, Malaysia offers a diverse array of experiences, from the modern skyscrapers of Kuala Lumpur to the tranquil tea plantations of the Cameron Highlands. Visitors can explore the bustling street food markets of Penang, relax on the beautiful beaches of Langkawi, or trek through the ancient rainforests of Borneo in search of exotic wildlife.</p>
            <div className="card-actions justify-center">
              <button className="btn glass w-full bg-[#165D66] text-white">View Details</button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl image-full h-[340px]">
          <figure>
            <img className='w-full' src={cambodia} alt="cambodia" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center text-white font-extrabold text-4xl">Cambodia</h2>
            <p className='text-sm font-bold my-8'> Home to the magnificent temples of Angkor Wat, Cambodia is a land of ancient wonders and rich history. Visitors can explore the bustling capital city of Phnom Penh, cruise along the picturesque Tonle Sap Lake, or relax on the pristine beaches of Sihanoukville. Cambodias vibrant culture, delicious cuisine, and warm hospitality make it a popular destination </p>
            <div className="card-actions justify-center">
              <button className="btn glass w-full bg-[#165D66] text-white">View Details</button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl image-full h-[340px]">
          <figure>
            <img className='w-full' src={vietnam} alt="vietnam" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center text-white font-extrabold text-4xl">Vietnam</h2>
            <p className='text-sm font-bold my-8'>A captivating destination offering diverse experiences, from the bustling streets of Hanoi and Ho Chi Minh City to the serene beauty of Ha Long Bay and the ancient town of Hoi An. Travelers are drawn to Vietnam's delicious street food, fascinating history, and stunning natural scenery, including picturesque rice terraces and vibrant floating markets.</p>
            <div className="card-actions justify-center">
              <button className="btn glass w-full bg-[#165D66] text-white">View Details</button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl image-full h-[340px]">
          <figure>
            <img className='w-full' src={indonesia} alt="Indonesia" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center text-white font-extrabold text-4xl">Indonesia</h2>
            <p className='text-sm font-bold my-8'>With over 17,000 islands, Indonesia is a treasure trove of natural wonders, including pristine beaches, lush rainforests, and volcanic landscapes. Visitors can immerse themselves in the vibrant culture of Bali, explore the ancient temples of Java, or embark on adventurous hikes in Komodo National Park to see the famous Komodo dragons.</p>
            <div className="card-actions justify-center">
              <button className="btn glass w-full bg-[#165D66] text-white">View Details</button>
            </div>
          </div>
        </div>        

      </div>
    </main>
  );
};

export default Countries;
