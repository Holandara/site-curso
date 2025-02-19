import React from 'react';
import CourseBlock from './CourseBlock/CourseBlock';
import './InvestSection.css';

const InvestSection = () => {
  return (
    <div>
      <div className="carreiraTexto" id='contato'>
        invista <span className="carreiraTexto2" >hoje</span> na sua{' '}
        <span className="carreiraTexto2">carreira!</span>
      </div>
      <div className="flex md:flex-row-reverse flex-wrap">
        <CourseBlock
          title="Dia 05/05 e 06/05"
          location="Novadata Núcleo Bandeirante"
          time="7h às 17h"
          price="250"
          discount="Desconto de **% para profissionais Cref7"
        />
        <CourseBlock
          title="Dia 05/05 e 06/05"
          location="Novadata Núcleo Bandeirante"
          time="7h às 17h"
          price="250"
          discount="Desconto de **% para profissionais Cref7"
        />
      </div>
    </div>
  );
};

export default InvestSection;