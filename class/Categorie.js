class Categorie {
    static Serveur = new Categorie("Serveur")
    static EmployeCuisine = new Categorie("EmployeCuisine")
    static Administratif = new Categorie("Administratif")
  
    constructor(name) {
      this.name = name
    }
  }