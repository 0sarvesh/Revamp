import React, { useState } from 'react';

function Header() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [inp, setInp] = useState({
    names: "",
    message: ""
  });
  const [com, setCom] = useState([]);


  return (
    <div>
      Header
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <p>{count}</p>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setShow(prev => !prev)}>click</button>
        {show && (
          <div>hello</div>
        )}
      </div>
      <input
        type="text"
        onChange={(e) => setInp({ ...inp, names: e.target.value })}
        value={inp.names}
      />
      <input
        type="text"
        onChange={(e) => setInp({ ...inp, message: e.target.value })}
        value={inp.message}
      />
      <p>{inp.names}</p>
      <p>{inp.message}</p>
      <h1 >{com}</h1>
      <button
        onClick={() => { setCom((prev) => {[...prev," :comment"] })}} 
      >click button</button>
    </div>
  );
}

export default Header;
