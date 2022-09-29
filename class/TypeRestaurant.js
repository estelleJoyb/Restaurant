class TypeRestaurant {
    static Bistro = new TypeRestaurant("Bistro")
    static FastFood = new TypeRestaurant("FastFood")
    static Gastronomique = new TypeRestaurant("Gastronomique")
  
    constructor(name) {
      this.name = name
    }
  }