import { useState } from "react";
import Title from "./Title";
import data from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const allCat = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCat);
  

  const filterItems = (category) => {
    if (category === "all") {
      setMenu(menu);
      return
    }
    const newCategories = data.filter((item) => item.category === category)
    setMenu(newCategories)
   console.log(category);
 }

  return (
    <main className="menu">
      <Title text="our menu" />
      <Categories categories={categories} filterItems={filterItems} />
      <Menu menu={menu} />
    </main>
  );
};
export default App;
