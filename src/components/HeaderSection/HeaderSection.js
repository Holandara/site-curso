import React from 'react';
import './HeaderSection.css';
import { motion } from "framer-motion"; // Importação correta do framer-motion
import { scroll } from "motion";

const HeaderSection = () => {
  return (
    <header className="App-header">
      <div className="inicio">
        <div className="grid grid-cols-2 flex-1">
          {/* Coluna esquerda | com textos */}
          <div className="lado1">
            <div className="texto-domine">Domine a antropometria na</div>
            <div className="texto-pratica">PRÁTICA</div>
            <div className="texto-curso">
              Curso prático de 2 dias para profissionais que desejam<br />
              dominar a <span className="moreweight">avaliação física com excelência.</span>
            </div>
            <div className="botao">Garanta sua vaga!</div>
          </div>

          {/* Coluna direita | com imagens */}
          <div className="lado2 col-start-2 row-span-full relative responsive">
    
              <div className="blob-image absolute">
                <img src="blob.svg" alt="blob" />
              </div>
              <div className="blob-line absolute">
                <img src="blob-line.svg" alt="blob line" />
              </div>
              <motion.div
              initial={{ opacity: 0 }} // Começa invisível
              animate={{ opacity: 1 }} // Termina totalmente visível
              transition={{ duration: 1.5 }} // Duração da animação (1 segundo)
            >
              <div className="imagem1 absolute">
                <img className="imagemBraco" src="foto-braco.jpg" alt="img braco" />
              </div>
              </motion.div>
              <motion.div
              initial={{ opacity: 0 }} // Começa invisível
              animate={{ opacity: 1 }} // Termina totalmente visível
              transition={{ duration: 1}} // Duração da animação (1 segundo)
            >
              <div className="imagem2 absolute">
                <img className="imagemMascara" src="Fitchek_Baixa-1.jpg" alt="img fitcheck" />
              </div>
              </motion.div>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;