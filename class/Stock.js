<<<<<<< HEAD
export class Stock{
=======
class Stock extends Restaurant{
>>>>>>> 5ce87b5 (test)

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