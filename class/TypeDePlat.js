class TypeDePlat {
    static Aperitif = new TypeDePlat("Aperitif")
    static Entree = new TypeDePlat("Entree")
    static PlatPrincipal = new TypeDePlat("PlatPrincipal")
    static Dessert = new TypeDePlat("Dessert")
    static Cafe = new TypeDePlat("Cafe")
    static Digestif = new TypeDePlat("Digestif")
    static Boisson = new TypeDePlat("Boisson")
  
    constructor(name) {
      this.name = name
    }
  }