import { IMAGES } from "./images"

export interface dataInterface {
  title: string;
  body: string;
  imgUrl: number;
}


export const data: dataInterface[] = [
    {
      title: "Veja seu desempenho",
      body: "Com o JAFM você pode acompanhar sua jornada de constante melhoria",
      imgUrl: IMAGES.first
    },
    {
      title: "Conquiste certificados",
      body: "Seu esforço é real para nós, legitimamos o seu aprendizado no JAFM",
      imgUrl: IMAGES.second,
    },
    {
      title: "Rápido e prático",
      body: "Sem stress. Nos esforçamos para entregar o melhor serviço para nossos colaboradores",
      imgUrl: IMAGES.third,
    },
  ];
