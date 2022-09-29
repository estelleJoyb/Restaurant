class Plat extends Restaurant {

    constructor(nom, description, prix, typePlat) {
      this.nom = nom;
      this.description = description;
      this.prix = prix;
      this.typePlat = typePlat;
    }
  
    getNom() {
      return this.nom;
    }
  
    setNom(nom) {
      this.nom = nom;
    }
  
    getDescription() {
      return this.description;
    }
  
    setDescription(description) {
      this.description = description;
    }
  
    getPrix() {
      return this.prix;
    }
  
    setPrix(prix) {
      this.prix = prix;
    }
  
    getTypePlat() {
      return this.typePlat
    }
  
    setTypePlat(typePlat) {
      this.typePlat = typePlat;
    }
  }