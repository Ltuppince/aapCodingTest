import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ProductCard from "./components/ProductCard/index";
import products from "./products.json";

function App() {
  return (
   <Wrapper>
     <Title>Product List</Title>
     <ProductCard
        img={products[0].img}
        name={products[0].name}
        number={products[0].number}
        pricing={products[0].pricing}
      />
     <ProductCard
        img={products[1].img}
        name={products[1].name}
        number={products[1].number}
        pricing={products[1].pricing}
      />
      <ProductCard
        img={products[2].img}
        name={products[2].name}
        number={products[2].number}
        pricing={products[2].pricing}
      />       
   </Wrapper>
  );
}

export default App;