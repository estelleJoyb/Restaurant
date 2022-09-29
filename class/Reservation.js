class Reservation extends Restaurant{

    constructor(dateRes, nom, status) {
        this.dateRes = dateRes;
        this.nom = nom;
        this.status = status;
    }

    getDateRes() {
        return this.dateRes;
    }
    
    setDateRes(dateRes) {
        this.dateRes = dateRes;
    }
  
    getNom() {
      return this.nom;
    }
  
    setNom(nom) {
      this.nom = nom;
    }
  
    getStatus() {
      return this.status;
    }
  
    setStatus(status) {
      this.status = status;
    }    
  }