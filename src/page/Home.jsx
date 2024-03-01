import React, { useEffect, useState, useId } from 'react';
import { Link } from 'react-router-dom';
// import About from "./about/About"
import { AboutPage } from '../path-route/PathRoute';
import './../index.css'

export default function Home() {
  // const [fname, setFname] = useState('');
  // const [lname, setLname] = useState('');
  const [code, setCode] = useState('');
  const [page, setPage] = useState('')
  const [flag, setFlag] = useState(true)
  const [x, setX] = useState('')
  const setImg = useId();
  const handleSubmit = (e) => {
    e.preventDefault();

  }
  const go = () => {
    if ((code.length != 8) || (isNaN(x))) {
      setFlag(false)
    } else {
      setFlag(true)
    }
  }
  useEffect(() => {
    setX((Number(code)));

    console.log(x);
    if ((code.length == 8) && !(isNaN(x))) {
      setPage(AboutPage)
    } else {
      setPage('')
    }
  }, [code])
  function getImg(e) {
    e.target.parentElement.previousElementSibling.src = URL.createObjectURL(e.target.files[0])
  }
  return (
    <form className='w-full h-[100vh] bg-yellow-400 m-0 p-0 flex justify-center items-start' onSubmit={(e) => handleSubmit(e)}>
      <div className='w-[300px] flex justify-center content-center flex-wrap'>
        {/* code  */}
        <label className='mx-[58px] my-1'>
          <input type="text" onChange={(e) => setCode(e.target.value)} placeholder='internatinal code' className='w-[220px] border rounded-sm p-2 mx-2' /><br />
          <p className={`text-red-600 flex justify-center ${flag ? ' hidden' : 'flex'}`}>please compleate the form!</p>
        </label>
        {/* end code  */}
        <label className='mx-[58px] my-1'>
          <input type="password" placeholder='password' className='w-[220px] border rounded-sm p-2 mx-2' />
        </label>
        {/* img  */}
        <div className='relative w-[300px] p-2 flex justify-center items-center'>
          <img src='images/logo.svg' alt="" className='w-[100px] h-[100px] bg-blue-400 object-cover rounded-[50%]' />
          <label className='mx-[58px] my-1 flex justify-center items-center border w-[40px] h-[40px] rounded-[50%] bg-slate-500 absolute top-[60px] right-7' htmlFor={setImg} >
            <input type="file" accept='image/jpeg, image.png, image.jpg, image.webp' title="test" className='hidden' id={setImg} onChange={getImg} />
          </label>
        </div>
        {/* end img  */}
        <Link to={page} className='mx-[106px] border my-1'>
          <button className='w-[220px] py-1 px-4 bg-blue-950 text-white rounded-sm' onClick={go}>go to about page</button>
        </Link>
      </div>
    </form>
  );
} 
