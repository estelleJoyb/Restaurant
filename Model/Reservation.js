export class Reservation {

    constructor(dateRes, nom, status, nbpersonne) {
        this.dateRes = dateRes;
        this.nom = nom;
        this.status = status;
        this.nbpersonne = nbpersonne;
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

    setNbPersonne(nbpersonne){
      this.nbpersonne = nbpersonne;
    }
  
    getStatus() {
      return this.status;
    }

    getNbPersonnes() {
      return this.nbpersonne;
    }
  
    setStatus(status) {
      this.status = status;
    }    
  }