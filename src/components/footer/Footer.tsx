/* eslint-disable prefer-const */
import { GithubLogo } from "@phosphor-icons/react";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-[#37cf8d] text-black">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">Soluções em Seguros | Copyright: {data}</p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <a href="https://github.com/Projeto-Integrador-ModeloGP2" target="_blank">
              <GithubLogo size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;