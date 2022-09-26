class Plat {

    constructor(nom, description, prix, typePlat) {
      this.nom = nom;
      this.description = description;
      this.prix = prix;
      this.typePlat = typePlat;
    }
  
    getNom() {
      return this.nom;
    }
  
    setNom(String nom) {
      this.nom = nom;
    }
  
    getDescription() {
      return this.description;
    }
  
    setDescription(String description) {
      this.description = description;
    }
  
    getPrix() {
      return this.prix;
    }
  
    setPrix(Double prix) {
      this.prix = prix;
    }
  
    getTypePlat() {
      return this.typePlat
    }
  
    setTypePlat(TypePlat typePlat) {
      this.typePlat = typePlat;
    }
  
  
    
  }