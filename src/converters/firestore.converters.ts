// Importando tipos necessários do Firestore para manipulação de documentos e snapshots
import {
  DocumentData, // Representa um documento genérico no Firestore
  QueryDocumentSnapshot, // Representa um snapshot de um documento consultado no Firestore
  SnapshotOptions, // Representa opções de snapshot usadas para personalizar como os dados são extraídos
} from "firebase/firestore";

// Importando o tipo Category, que define a estrutura esperada dos dados da categoria
import Category from "../types/category.types";

// Um conversor personalizado para mapear o tipo Category para um formato que pode ser salvo no Firestore
export const categoryConverter = {
  // Método que converte um objeto do tipo Category em um formato compatível com o Firestore
  toFirestore(category: Category): DocumentData {
    // Retorna uma cópia do objeto Category, pronto para ser salvo no Firestore
    return { ...category };
  },

  // Método que converte os dados retornados de um documento do Firestore em um objeto do tipo Category
  fromFirestore(
    snapshot: QueryDocumentSnapshot, // O snapshot do documento obtido no Firestore
    options: SnapshotOptions // Opções de personalização para a leitura do snapshot
  ): Category {
    // Extraindo os dados do snapshot com base nas opções fornecidas
    const data = snapshot.data(options);

    // Retornando um objeto do tipo Category com os dados extraídos
    return {
      id: data.id, // ID único da categoria
      displayName: data.displayName, // Nome exibido da categoria
      imageUrl: data.imageUrl, // URL da imagem associada à categoria
      name: data.name, // Nome interno ou chave da categoria
      products: data.products, // Lista de produtos associados à categoria
    };
  },
};
