import { Link } from "react-router-dom";


function HomePage() {
  return (
    <div className="homepage">
      {/* Seção de texto */}
      <div className="homepage-text">
        <h1>Little Lemon</h1>
        <p>
          Welcome to Little Lemon, your cozy restaurant in Chicago. Enjoy our
          delicious Mediterranean cuisine and make your reservation today!
        </p>
        <Link to="/booking">
          <button>Book a Table</button>
        </Link>
      </div>

      {/* Seção de imagem */}
      <div className="homepage-image">
        <img  alt="Little Lemon restaurant" />
      </div>
    </div>
  );
}

export default HomePage;
