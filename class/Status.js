class Status {
    static PasArrive = new Status("PasArrive")
    static EnCours = new Status("EnCours")
    static Regle = new Status("Regle")
  
    constructor(name) {
      this.name = name
    }
  }