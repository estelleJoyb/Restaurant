class Salaires {

    constructor(tauxHoraire, nbHeures) {
        this.tauxHoraire = tauxHoraire;
        this.nbHeures = nbHeures;
    }

    getTauxHoraire() {
        return this.tauxHoraire;
    }
    
    setTauxHoraire(tauxHoraire) {
        this.tauxHoraire = tauxHoraire;
    }
  
    getNbHeures() {
      return this.nbHeures;
    }
  
    setNbHeures(nbHeures) {
      this.nbHeures = nbHeures;
    } 
  }