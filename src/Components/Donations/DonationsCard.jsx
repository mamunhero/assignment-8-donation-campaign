import { Link } from "react-router-dom";

const DonationsCard = ({ donation }) => {
  const { id, picture, title, category, card_bg, text_color, category_bg } = donation || {};

  
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
      <Link to={`/donations/${id}`}>
        <div className="card shadow-xl" style={cardStyle}>
          <figure>
            <img src={picture} alt="picture" />
          </figure>
          <div className="card-body">
            <h2 className="card-title w-28 py-1 px-3 block text-center font-medium text-xl" style={textStyles, categoryStyle}>
              {category}
            </h2>
            <p className="font-semibold text-lg" style={textStyles}>{title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonationsCard;