import React, { useState } from 'react';
import { FcAlarmClock, FcBinoculars, FcFilmReel, FcHeadset, FcInfo, FcOk, FcPlus, FcSimCardChip } from "react-icons/fc";
import History from './History';

const Home = () => {
    const [buttonText, setbuttonText] = useState('Clock');
    const [buttonImg, setbuttonImg] = useState(<FcAlarmClock className='text-5xl' />);
    const [rotate, setRotate] = useState('');
    return (
        <>
            <h1 className='text-center my-5 text-lg'>Shop the Job</h1>
            <div className='mx-auto pt-[15px] w-[30rem] h-[30rem] rounded-full bg-gray-900 border-solid border-[15px] border-pink-900'>
                <div className='border-solid w-[300px] h-[300px] absolute mt-[66px] ml-[77px] border-[10px] border-black-900 rounded-full'>
                </div>
                <div className="grid grid-cols-6 gap-4">
                    <div className="col-start-3 col-span-2 mx-auto /*bg-yellow-900*/">
                        <button className='hover:animate-pulse' onMouseMove={() => { setbuttonText('Clock'); setbuttonImg(<FcAlarmClock className='text-5xl' />); setRotate('rotate-[-1deg] animate-pulse'); }} onClick={() => { History.push('/products/clock'); window.location.reload(false); }}><FcAlarmClock className='text-5xl' /></button>
                    </div>
                    <div className="col-start-2 col-end-2 ml-[-25px] mx-auto /*bg-yellow-900*/">
                        <button className='hover:animate-pulse' onMouseMove={() => { setbuttonText('Gadget'); setbuttonImg(<FcBinoculars className='text-5xl' />); setRotate('rotate-[310deg] animate-pulse'); }} onClick={() => { History.push('/products/gadget'); window.location.reload(false); }}><FcBinoculars className='text-5xl' /></button>
                    </div>
                    <div className="col-end-6 col-span-1 mx-auto mr-[-25px] /*bg-yellow-900*/">
                        <button className='hover:animate-pulse' onMouseMove={() => { setbuttonText('DVDs'); setbuttonImg(<FcFilmReel className='text-5xl' />); setRotate('rotate-[50deg] animate-pulse'); }} onClick={() => { History.push('/products/dvd'); window.location.reload(false); }}><FcFilmReel className='text-5xl' /></button>
                    </div>
                    <div className="col-start-1 col-end-2 mx-auto my-auto /*bg-yellow-900*/">
                        <button className='hover:animate-pulse' onMouseMove={() => { setbuttonText('Head'); setbuttonImg(<FcHeadset className='text-5xl' />); setRotate('rotate-[270deg] animate-pulse'); }} onClick={() => { History.push('/products/head'); window.location.reload(false); }}><FcHeadset className='text-5xl' /></button>
                    </div>
                    <div className='z-10 mx-auto my-auto'>
                        <button className='hover:animate-pulse ml-[127px] mt-[5px]' onClick={() => { History.push(`/products/${buttonText}`); window.location.reload(false); }}>{buttonImg}<span>{buttonText}</span></button>
                    </div>
                    <div className={`z-0 col-start-3 bg-white  w-[150px] h-[150px] rounded-full col-span-1 border-solid border-[20px] border-pink-900 ${rotate} /*bg-yellow-900*/`}>
                        <div className='/*animate-bounce*/ mt-[-50px] ml-[55px] h-[50px] border-solid border-l-[1px] border-white-900'></div>
                    </div>
                    <div className="col-end-7 col-span-1 mx-auto my-auto /*bg-yellow-900*/">
                        <button className='hover:animate-pulse' onMouseMove={() => { setbuttonText('Info'); setbuttonImg(<FcInfo className='text-5xl' />); setRotate('rotate-[90deg] animate-pulse'); }} onClick={() => { History.push('/products/info'); window.location.reload(false); }}><FcInfo className='text-5xl' /></button>
                    </div>
                    <div className="col-start-2 col-end-2 mx-auto ml-[-25px] /*bg-yellow-900*/">
                        <button className='hover:animate-pulse' onMouseMove={() => { setbuttonText('Thanks'); setbuttonImg(<FcOk className='text-5xl' />); setRotate('rotate-[227deg] animate-pulse'); }} onClick={() => { History.push('/products/thanks'); window.location.reload(false); }}><FcOk className='text-5xl' /></button>
                    </div>
                    <div className="col-end-6 col-span-1 mx-auto mr-[-25px] /*bg-yellow-900*/">
                        <button className='hover:animate-pulse' onMouseMove={() => { setbuttonText('Medics'); setbuttonImg(<FcPlus className='text-5xl' />); setRotate('rotate-[130deg] animate-pulse'); }} onClick={() => { History.push('/products/medics'); window.location.reload(false); }}><FcPlus className='text-5xl' /></button>
                    </div>
                    <div className="col-start-3 col-span-2 mx-auto /*bg-yellow-900*/">
                        <button className='hover:animate-pulse' onMouseMove={() => { setbuttonText('eSIM'); setbuttonImg(<FcSimCardChip className='text-5xl' />); setRotate('rotate-[180deg] animate-pulse'); }} onClick={() => { History.push('/products/esim'); window.location.reload(false); }}><FcSimCardChip className='text-5xl' /></button>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Home;