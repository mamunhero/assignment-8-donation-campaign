
const Card = ({donation}) => {
  const { id, picture, title, category, card_bg, text_color, category_bg, price } = donation || {};

  const cardStyle = {
    backgroundColor: card_bg,
  };

  const textStyles = {
    color: text_color,
  };

  const categoryStyle = {
    backgroundColor: category_bg
  };


  return (
    <div>
      <div className="card md:card-side" style={cardStyle}>
  <figure><img src={picture} alt="image-card" className="h-full w-full object-cover"/></figure>
  <div className="card-body">
    <h2 className="card-title font-xl font-semibold text-black w-28 text-center block py-1 px-3" style={textStyles, categoryStyle}>{category}</h2>
    <h2 className="card-title text-black font-2xl font-bold">{title}</h2>
    <span className="text-xl font-semibold" style={textStyles}>{price}</span>
    <div class="">
      <button class=" text-white block py-2 px-4 text-center rounded text-lg font-semibold " style={categoryStyle}>View Details</button>
    </div>
  </div>
</div>
    
    </div>
    
  );
};

export default Card;
