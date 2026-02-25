import { NavLink } from "react-router-dom";

const categories = [
  "all",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

function SubHeader() {
  return (
    <div className="subheader">
      {categories.map((cat) => (
        <NavLink
          key={cat}
          to={cat === "all" ? "/" : `/category/${cat}`}
          className="category-chip"
        >
          {cat}
        </NavLink>
      ))}
    </div>
  );
}

export default SubHeader;