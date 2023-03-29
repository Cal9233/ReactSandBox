import React, {useState, useEffect, useRef} from 'react'

const UseRefExample2 = () => {
    const [name, setName] = useState('');
    //useRef does not rerender, so you must useState
    const renders = useRef(1);
    //previous ref
    const prevRef = useRef('');

    useEffect(() => {
        renders.current = renders.current + 1;

        prevRef.current = name;
        //dependency array only renders once, remove for constant render
    }, [name]);

  return (
    <div>
        <h1>Renders: {renders.current}</h1>
        <h2>Prev Name state: {prevRef.current}</h2>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control mb-3" />
    </div>
  )
}

export default UseRefExample2