import React from "react";

function Home() {
  return (
    <>
      <div className="bg-white flex justify-center">
        <div className="container grid grid-cols-2 text-black">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Bem Vindos!</h2>
            <p className="text-xl">
              Aqui você encontra tudo para a segurança do seu automóvel!
              <p>Acesse nossos serviços personalizados:</p>
              <p>✅ Escolha sua seguradora</p>
              <p>✅ Confira qual plano se encaixa as suas necessidades </p>
              <p>✅ Tire dúvidas com nossa equipe</p>
              <p>Caso precise de ajuda, entre em contato conosco!</p>
            </p>

            <div className="flex justify-around gap-4">
              <div
                className="rounded text-black 
                                          border-black border-solid border-2 py-2 px-4"
              >
                <a href="#">Saiba mais</a>
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://img.freepik.com/vetores-gratis/agente-de-recrutamento-analisando-candidatos_74855-4565.jpg?t=st=1740495171~exp=1740498771~hmac=368568fa7f9cfabb0554b7ab7b238f5e05faa8dba988b34f250ecefc7d9948e4&w=1380"
              alt="Imagem Página Home"
              className="w-3/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
