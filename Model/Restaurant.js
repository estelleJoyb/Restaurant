export class Restaurant {
    employes = new Array();

    constructor(nom, adresse, tel, type, horaires, nbPlaces, employes = [], plats = [], menus = [], reservations = []){
        this.nom = nom;
        this.adresse = adresse;
        this.tel = tel;
        this.type = type;
        this.horaires = horaires;
        this.nbPlaces = nbPlaces;
        this.employes = employes || [];
        this.plats = plats || [];
        this.menus = menus || [];
        this.reservations = reservations || [];
    }

    //getters : 
    getNom(){
        return this.nom;
    }

    getAdresse(){
        return this.adresse;
    }

    getTel(){
        return this.tel;
    }

    getType(){
        return this.type;
    }

    getHoraires(){
        return this.horaires;
    }

    getNbplaces(){
        return this.nbPlaces;
    }

    getEmployes(){
        return this.employes;
    }

    getStock(){
        return this.stock;
    }

    getReservation(){
        return this.reservations;
    }

    getMenus(){
        return this.menus;
    }

    getPlat(){
        return this.plats;
    }

    //setters :
    setStock(stock){
        this.stock = stock;
    }

    //add :

    addEmploye(empl){
        this.employes.push(empl);
    }

    addReservation(resa){
        this.reservations.push(resa);
    }

    addMenu(menu){
        this.menus.push(menu);
    }

    addPlat(plat){
        this.plats.push(plat);
    }

}