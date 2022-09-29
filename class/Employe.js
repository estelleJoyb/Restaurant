import {Salaires} from 'Salaires';

class Employe extends Restaurant{
    constructor(nom, prenom, adresse, tel, rib,categorie){
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.tel = tel;
        this.rib = rib;
        this.categorie = categorie;
        this.salaire = this.salaire;
    }

    //getters
    getNom(){
        return this.nom;
    }

    getPrenom(){
        return this.prenom;
    }

    getAdresse(){
        return this.adresse;
    }

    getTel(){
        return this.tel;
    }

    getRib(){
        return this.rib;
    }

    getCategorie(){
        return this.categorie;
    }

    getSalaire(){
        return this.salaire;
    }
    getPaie(){
        var tauxHoraire = this.salaire.getTauxHoraire();
        var nbHeures = this.salaire.getNbHeures();
        var Paie = tauxHoraire * nbHeures;
        return Paie;
    }

    //setters:
    setAdresse(nouvelleAdresse){
        this.adresse = nouvelleAdresse;
    }

    setTel(nouveauTel){
        this.tel = nouveauTel;
    }

    setRib(nouveauRib){
        this.rib = nouveauRib;
    }

    setCategorie(nouvelleCategorie){
        this.categorie = nouvelleCategorie;
    }

    setSalaire(nouveauSalaire){
        this.salaire = nouveauSalaire;
    }
}