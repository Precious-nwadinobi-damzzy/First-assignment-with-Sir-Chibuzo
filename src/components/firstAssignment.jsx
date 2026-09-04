import React from "react";

export default function FirstAssignment() {
  return (
    <div className="grid grid-cols-3 gap-3 p-4">
      <Box
        Name="Ada Lovelace"
        role="Mathematician"
        button="Hello"
        image="FirstPic.jpg"
      />

      <Box
        Name="John Ogbonna"
        role="Software Developer"
        button="Hi"
        image="SecondPic.jpg"
      />

      <Box
        Name="Obinna Nsofor"
        role="Chef"
        button="Welcome"
        image="ThirdPic.jpg"
      />
    </div>
  );
}

function Box({ Name, role, button, image }) {
  // const action=()=>{
  //   alert(`${button}!`)
  // } 

  // or........

  function action() {
    alert(`${button} ${Name}!`);
  }
  return (
    <section className="font-mono border border-gray-300 p-3">
      <div className="bg-blue-400 min-h-100 flex">
        <img src={image} alt={image} className="object-cover h-100 w-full" />
      </div>

      <p>Name: {Name}</p>
      <p>Role: {role}</p>
      <button onClick={action} className="bg-gray-700 rounded-xl text-white p-2">
        Say {button}
      </button>
    </section>
  );
}
