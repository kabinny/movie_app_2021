import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} width="100%" />
    </div>
    
  );
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://images.unsplash.com/photo-1583224964978-2257b960c3d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
  },
  {
    name: 'Samgyeopsal',
    image: 'https://images.unsplash.com/photo-1548150914-c9f19106dbf6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80',
  },
  {
    name: 'Bibimbap',
    image: 'https://images.unsplash.com/photo-1600289031464-74d374b64991?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2275&q=80',
  },
  {
    name: 'Doncasu',
    image: 'https://images.unsplash.com/photo-1624517607896-bb5dfd8f5764?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80',
  },
  {
    name: 'Kimbap',
    image: 'https://images.unsplash.com/photo-1608731001805-187e9c904388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  )
}

export default App;