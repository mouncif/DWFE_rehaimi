export interface produit {
  id?: number;
  nomProduit: string,
  nomCourtProduit: string,
  prixBase: string,
  prixVente: string,
  seuilMaxRemise: string,
  uniteProduit: string,
  image: string,
  quantiteInitialStock: number,
  quantiteActuelStock: number
}
