export class Stock {

    constructor(produit, nbProduit){
        this.produit = produit;
        this.nbProduit = nbProduit;
    }

    getProduit(){
        return this.produit;
    }

    getNbProduit(){
        return this.nbProduit;
    }

    setProduit(produit){
        this.produit = produit;
    }

    setNbProduit(nbProduit){
        this.nbProduit = nbProduit;
    }
}