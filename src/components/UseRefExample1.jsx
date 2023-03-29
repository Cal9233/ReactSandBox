import React, {useRef} from 'react'

const UseRefExample1 = () => {
    const inputRef = useRef();
    const paraRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();

        
        inputRef.current.style.backgroundColor = 'Red';
        inputRef.current.value = 'Input Ref Testing';
        paraRef.current.innerText = 'Ref testing 2';
    }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input type='text' ref={inputRef} id='name' className='form-control mb-2' />
            <button type='submit' className='btn btn-primary'>Submit</button>
            {/* ref focus when selected selects the element containing ref */}
            <p onClick={() => inputRef.current.focus()} ref={paraRef}>Ref testing 1</p>
        </form>
    </div>
  )
}

export default UseRefExample1