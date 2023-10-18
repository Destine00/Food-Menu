import Food from "./Food";

function Menu({ menu }) {
  return (
    <div className="section-center">
      {menu.map((food) => {
        return <Food key={food.id} {...food} />;
      })}
    </div>
  );
}
export default Menu;
