import React, { useEffect } from "react";
import "./Main.css";

const MainSection = () => {
  useEffect(() => {
    const container = document.getElementById("right-block");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // Configurações das imagens
    const images = [
      { src: "blob-line.svg", translate: { x: -30, y: -30 }, rotation: 50, size: 700 },
      { src: "blob.svg", translate: { x: 0, y: 0 }, rotation: 0, size: 600 },
      { src: "foto-braco.jpg", translate: { x: 100, y: -100 }, rotation: 10, size: 200, rounded: true },
      { src: "Fitchek_Baixa-1.jpg", translate: { x: -60, y: 40 }, rotation: -20, size: 200, rounded: true },
    ];

    const loadImages = (sources, callback) => {
      let loadedImages = 0;
      const imageObjects = [];

      sources.forEach((source, index) => {
        const img = new Image();
        img.src = source.src;
        img.onload = () => {
          loadedImages++;
          imageObjects[index] = { ...source, img };
          if (loadedImages === sources.length) {
            callback(imageObjects);
          }
        };
      });
    };

    const drawRoundedRect = (ctx, x, y, width, height, radius) => {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.arcTo(x + width, y, x + width, y + radius, radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
      ctx.lineTo(x + radius, y + height);
      ctx.arcTo(x, y + height, x, y + height - radius, radius);
      ctx.lineTo(x, y + radius);
      ctx.arcTo(x, y, x + radius, y, radius);
      ctx.closePath();
    };

    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;

      loadImages(images, (loadedImages) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        // Calcular escala para tornar a montagem responsiva
        const scale = Math.min(canvas.width / 500, canvas.height / 600); // Ajuste baseado em um tamanho base de 1000x1000

        loadedImages.forEach(({ img, translate, rotation, size, rounded }) => {
          const scaledSize = size * scale; // Ajustar o tamanho com base na escala
          const imgWidth = scaledSize;
          const imgHeight = (img.height / img.width) * scaledSize; // Mantém a proporção da imagem

          // Aplicar translação e rotação
          ctx.save();
          ctx.translate(
            centerX + translate.x * scale, // Ajustar a translação com base na escala
            centerY + translate.y * scale
          );
          ctx.rotate((rotation * Math.PI) / 180);

          if (rounded) {
            // Criar bordas arredondadas
            const radius = Math.min(imgWidth, imgHeight) * 0.1; // Raio para bordas arredondadas (10% do menor lado)
            drawRoundedRect(ctx, -imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight, radius);
            ctx.clip(); // Limitar o desenho ao retângulo arredondado
          }

          ctx.drawImage(
            img,
            -imgWidth / 2,
            -imgHeight / 2,
            imgWidth,
            imgHeight
          );
          ctx.restore();
        });
      });
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <main className="App-main" id="home">
      <div className="left-block">
        {/* Conteúdo do bloco esquerdo */}
        <div className="lado1">
            <div className="texto-domine">Domine a antropometria na</div>
            <div className="texto-pratica">PRÁTICA</div>
            <div className="texto-curso">
              Curso prático de 2 dias para profissionais que desejam<br />
              dominar a <span className="moreweight">avaliação física com excelência.</span>
            </div>
            <div className="botao">Garanta sua vaga!</div>
          </div>
      </div>
      <div className="right-block" id="right-block">
        <canvas id="canvas" className="w-full h-full"></canvas>
      </div>
    </main>
  );
};

export default MainSection;
