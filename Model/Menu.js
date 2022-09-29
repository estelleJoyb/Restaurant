export class Menu {

    constructor(nom, description, prix) {
        this.nom = nom;
        this.description = description;
        this.prix = prix;
    }        

    getNom(){
        return this.nom;
    }
        
    getDescription(){
        return this.description;
    }

    getPrix(){
        return this.prix;
    }

    setNom(nom){
        this.nom = nom;
    }

    setDescription(description){
        this.description = description;
    }

    setPrix(prix){
        this.prix = prix;
    }

    addPlat(plat){
        this.plats.push(plat);
    }

    getPlats(){
        return this.plats;
    }
}
