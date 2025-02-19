import React from 'react';
import './CourseBlock.css';

const CourseBlock = ({ title, location, time, price, discount }) => {
  return (
    <div className="container-de-blocos w-full md:w-2/4 bg-gray-400 text-center text-gray-700">
      <div className="bloco-curso">
        <section id="curso-atual">
          <h1 className="datas">{title}</h1>
          <p className="locais">
            <span className="font-bold">Local:</span> {location}
          </p>
          <p>
            <span className="font-bold">Horário:</span> {time}
          </p>
          <div className="linha"></div>
          <h2 className="texto-pratica">
            <span className="text-3xl">R$</span>
            {price}
          </h2>
          <p className="text-base">{discount}</p>
          <button className="btn-entrar relative inline-flex items-center justify-center p-0.5 mb-10 me-2 
          overflow-hidden text-md font-md text-gray-900 rounded-lg group bg-gradient-to-br 
          from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white
          dark:text-white focus:ring-4 focus:outline-none focus:ring-black ">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Reservar
            </span>
            </button>
        </section>
      </div>
    </div>
  );
};

export default CourseBlock;
