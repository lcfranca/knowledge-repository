export type Produto = {
  id: string;
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
  oferta?: boolean;
  precoOferta?: number;
  preorder?: boolean;
};
