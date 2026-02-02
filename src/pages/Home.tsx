import { useState, useEffect } from "react";
import TextType from "../components/TextType";
import CardWeb from "../components/CardWeb";

/* const projects = [
  { title: "Proyecto 1", description: "Descripción del proyecto 1" },
  { title: "Proyecto 2", description: "Descripción del proyecto 2" },
  { title: "Proyecto 3", description: "Descripción del proyecto 3" },
]; */

const Home = () => {
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    const textArray = [
      "¡Bienvenido a mi portafolio!",
      "Aquí podrás observar mis diferentes proyectos",
      "Apps web, Apps móviles y más",
      "Vamos a eso . . ."
    ];
    const typingSpeed = 154;
    const pauseDuration = 1600;
    const totalChars = textArray.reduce((acc, str) => acc + str.length, 0);
    const totalTime = totalChars * typingSpeed + textArray.length * pauseDuration;

    const timer = setTimeout(() => setShowNext(true), totalTime);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="text-center p-8 rounded-lg shadow-xl max-w-4xl mx-4">
        {!showNext ? (
          <TextType
            text={[
              "¡Bienvenido a mi portafolio!",
              "Aquí podrás observar mis diferentes proyectos",
              "Apps web, Apps móviles y más",
              "Vamos a eso . . ."
            ]}
            typingSpeed={120}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
            className="text-white font-extrabold text-5xl font-poppins"
          />
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Proyectos Webs, dps hacemos un MAPs*/}
            <div className="relative z-10">
              <CardWeb />
            </div>

            {/* Proyectos Apps, dps hacemos un MAPs*/}
            <div className="relative z-10">
              {/* <CardWeb /> */}
            </div>

          </div>
        )}
      </div>

    </div>
  );
};

export default Home;
