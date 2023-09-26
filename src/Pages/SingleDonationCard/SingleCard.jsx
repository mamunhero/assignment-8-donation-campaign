
const SingleCard = ({donation}) => {
  // console.log(donation)
  const { id, picture, title, category, card_bg, text_color, category_bg, description, button_bg} = donation || {};

  const cardStyle = {
    backgroundColor: card_bg,
  };
  const buttonStyle = {
    backgroundColor: button_bg,
  }
  return (
    <div className="">
      <div className="card w-full">
        <div className="relative">
          <figure><img src={picture} alt="image" className="w-full h-full object-cover"/></figure>
          <div className="absolute top-0% left-0 right-0 bottom-0 bg-black bg-opacity-60 md:py-5 px-5 ">
            <button className="md:py-3 px-3 text-center text-red-600 text-2xl font-semibold rounded" style={buttonStyle} >Donate $290</button>
          </div>
        </div>
  <div className="card-body" style={cardStyle}>
    <h2 className="card-title text-[#0B0B0B] sm:text-2xl md:text-4xl font-bold">{title}</h2>
    <p className="text-[#FF5733] sm:text-sm md:text-xl font-medium text-justify">{description}</p>
  </div>
</div>
    </div>
  );
};

export default SingleCard;

