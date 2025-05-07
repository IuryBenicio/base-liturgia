type api = {
  tema: string;
  versiculo: string;
  pregador: string;
  santaCeia?: boolean;
  louvoresIniciais: louvor[];
  louvorPosPalavra?: louvor[];
  louvorCeia?: louvor[];
  avisos?: avisos[];
};

type louvor = {
  nome: string;
  cantor: string;
};

type avisos = {
  titulo: string;
  descrição: string;
};
