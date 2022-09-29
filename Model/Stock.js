export class Stock {

    constructor(produit, nbProduit){
        this.produit = produit;
        this.nbProduit = nbProduit;
    }

    get produit(){
        return this.produit;
    }

    get nbProduit(){
        return this.nbProduit;
    }

    set produit(produit){
        this.produit = produit;
    }

    set nbProduit(nbProduit){
        this.nbProduit = nbProduit;
    }
}