import { useState, useEffect } from "react";
import TextType from "../components/TextType";

const projects = [
  { title: "Proyecto 1", description: "Descripción del proyecto 1" },
  { title: "Proyecto 2", description: "Descripción del proyecto 2" },
  { title: "Proyecto 3", description: "Descripción del proyecto 3" },
];

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
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 text-white opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 300}ms`, animationFillMode: "forwards" }}
              >
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(20px);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Home;
