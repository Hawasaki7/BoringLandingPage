import React,{useState , useRef} from 'react'



export  function ScreenDsip(){
    const [val, setVal] = useState('10');
    const ref=useRef();
    return(
        <div className='boring-text'>
            <h1> boring landing pages</h1>
            <h3> phones: {val}</h3>
            <h4> React - Three</h4>
            <div className='slider-wrapper'>
                <input type="range"  min="1" max="20" value={val} className='slider' ref={ref} onChange={()=>{setVal(ref.current.value)}}   />
            </div>
        </div>
    )
}

