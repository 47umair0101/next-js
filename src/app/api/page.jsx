

  async function getData() {
    let res = await fetch("https://dummyjson.com/products");
    let json = await res.json();

   return json["products"];
  }


const page =   async () => {
  let data = await getData();
  

  return (
    <div>
      {/* <button onClick={() =>{ alert('Hello, User!')}} >Click Here</button> */}
      <h1>API Call</h1>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h4>{item["title"]}</h4>
            <p>{item["category"]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default page;




/*
// Client Side Rendering

'use client'
import React, { useEffect, useState } from 'react'

function page() {

  const [data, setData] = useState([]);
  console.log(data);

  useEffect(()=>{
    (async()=>{
      let res = await fetch('https://dummyjson.com/products')
      let json = await res.json();

      setData(json['products'])
    })();
  }, [])


  return (
    <div>
      <h1>API Call</h1>
      {data.map((item, index) => {
        return <div key={index}>
          <h4>{item['title']}</h4>
        </div>
      })}
    </div>
  )
}

export default page

*/
