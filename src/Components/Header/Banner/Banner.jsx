const Banner = () => {
  return (
    <div className="mt-10 mb-10">
      <div className="hero min-h-screen" style={{backgroundImage: 'url(../../../../../../src/assets/bg-donation.jpg)'}}>
      <div className="hero-overlay bg-opacity-60 bg-[#FFFFFFF2]"></div>
      <div className="hero-content text-center text-neutral-content">
      <div className="">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h2>
        <div className="form-control mt-5 ">
        <div className="input-group flex justify-center">
        <input type="text" placeholder="Search…" className="input input-bordered w-[50%]" />
        <button className="bg-[#FF444A] text-white block">
          <span className="bg-[#ff444a]">Search</span>
        </button>
        </div>
        </div>
      </div>
      </div>
      </div>
    </div>

  );
};

export default Banner;