import { useState } from "react";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Form from "./Form";
import Logo from "./Logo";

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = function (item) {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = function (id) {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = function (id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = function () {
    if (!items.length) return;
    if (window.confirm("Are you sure want to clear the list?")) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
