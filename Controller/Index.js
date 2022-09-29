import { Salaires } from '../Model/Salaires.js';
import { Employe } from '../Model/Employe.js';
import { Menu } from '../Model/Menu.js';
import { Plat } from '../Model/Plat.js';
import { Reservation } from '../Model/Reservation.js';
import { Restaurant } from '../Model/Restaurant.js';
import { Stock } from '../Model/Stock.js';
import { TypeRestaurant } from "../Model/TypeRestaurant.js";
import { TypeDePlat } from "../Model/TypeDePlat.js";
import Categorie  from "../Model/Categorie.js";
import { Status } from "../Model/Status.js";


// require('../Model/Salaires');
// require('../Model/Employe');
// require('../Model/Stock');
// require('../Model/Plat');
// require('../Model/Menu');
// require('../Model/Reservation');
//require(['../Model/Restaurant'],Restaurant);



function Init()
{
    const VoyageCulinaire = new Restaurant("Voyage culinaire","12, rue de la vierge","06 12 12 12 12",TypeRestaurant.Bistro,"12h-14h & 19h-23h","30");

    //employés
    const Sarah = new Employe("Sarah","Killic","35, route du Coquelicot","06 56 85 94 16","FR6210096000502376951846D60",Categorie.Employe_cuisine);
    const Quaivine = new Employe("Quaivine","Michard","106, rue du potier","06 57 85 64 16","FR4312739000504738673495Y48",Categorie.Employe_cuisine);
    const Pizza = new Employe("Pizza","Steve","2, rue de chez moi","06 57 85 64 16","FR7614508000407221865687I73",Categorie.Serveur);
    const Catherine = new Employe("Catherine","Bonnevue","79, avenue de la S.P.A","07 95 10 06 46","FR7230003000403484712973K89",Categorie.Administratif);

    VoyageCulinaire.addEmploye(Sarah);
    VoyageCulinaire.addEmploye(Quaivine);
    VoyageCulinaire.addEmploye(Pizza);
    VoyageCulinaire.addEmploye(Catherine);

    //salaires
    const S_Sarah = new Salaires(13,40);
    Sarah.setSalaire(S_Sarah);
    const S_Quaivine = new Salaires(5,45);
    Quaivine.setSalaire(S_Quaivine);
    const S_Pizza = new Salaires(15,45);
    Pizza.setSalaire(S_Pizza);
    const S_Catherine = new Salaires(12,35);
    Catherine.setSalaire(S_Catherine);

    //stock
    const BlanquetteVeau = new Stock("Blanquette de Veau",3);
    const Salade = new Stock("Salade",25);

    VoyageCulinaire.setStock(BlanquetteVeau);
    VoyageCulinaire.setStock(Salade);

    //Plats
    const Blanquette = new Plat("Blanquette de veau","Blanquette d'origine française avec une sauce mijotée 5h avec amour","16",TypeDePlat.PlatPrincipal);
    const cacahuete = new Plat("Cacahuètes","Cacahuètes volées à un écureuil du parc Paul Mistral","3",TypeDePlat.Aperitif);
    const chips = new Plat("Chips","Lays bien craquantes","3",TypeDePlat.Aperitif);
    const Sorbet = new Plat("Sorbet","2 Boules de Sorbet Glacé fait maison Citron, Fraise, Durian","4",TypeDePlat.Dessert);
    const DameBlanche = new Plat("Dame Blanche","La femme de mon frère le jour de son mariage","6",TypeDePlat.Dessert);
    const Chartreuse = new Plat("Chartreuse","Shot de chartreuse","4",TypeDePlat.Digestif);
    const Coca = new Plat("Coca-cola","Bien frais Chacal","2",TypeDePlat.Boisson);
    const SaladeCesar = new Plat("Salade César","Plat préféré en rome antique (n'a pas 1500 ans) - Jules César","12",TypeDePlat.PlatPrincipal);
    const SaladeLentilles = new Plat("Salade de lentilles","Salade faite de lentilles sans salade, sans lactose, végan","6",TypeDePlat.Entree);

    //Menu
    const MenuPlaisir = new Menu("Plaisir","Le menu des gourmants","20");
    MenuPlaisir.addPlat(SaladeLentilles);
    MenuPlaisir.addPlat(Blanquette);
    MenuPlaisir.addPlat(DameBlanche);

    const MenuEco = new Menu("Economique","Le menu des fauchés","15");
    MenuEco.addPlat(chips);
    MenuEco.addPlat(SaladeCesar);
    MenuEco.addPlat(Sorbet);

    VoyageCulinaire.addPlat(Blanquette);
    VoyageCulinaire.addPlat(cacahuete);
    VoyageCulinaire.addPlat(chips);
    VoyageCulinaire.addPlat(Sorbet);
    VoyageCulinaire.addPlat(DameBlanche);
    VoyageCulinaire.addPlat(Chartreuse);
    VoyageCulinaire.addPlat(Coca);
    VoyageCulinaire.addPlat(SaladeCesar);
    VoyageCulinaire.addPlat(SaladeLentilles);

    VoyageCulinaire.addMenu(MenuPlaisir);
    VoyageCulinaire.addMenu(MenuEco);

    //Reservation
    const R_Mireille = new Reservation("29/09/2022","Mireille",Status.EnCours,"4");
    const R_Joseph = new Reservation("05/10/2022","Joseph",Status.PasArrive);
    const R_Dan = new Reservation("25/09/2022","Dan",Status.Regle);

    VoyageCulinaire.addReservation(R_Mireille);
    VoyageCulinaire.addReservation(R_Joseph);
    VoyageCulinaire.addReservation(R_Dan);
    //plats
    var BlocPlat = document.getElementById("bloc_plat");
    if(BlocPlat != null){
        var plats = VoyageCulinaire.getPlat();
        var ul1 = document.createElement("ul");
        
        for(var i = 0; i< VoyageCulinaire.getPlat().length; i++){
            var li = document.createElement("li");
            li.classList.add("plat");
            li.innerHTML = plats[i].getNom() +" : "+ plats[i].getDescription();
           ul1.appendChild(li);
        }
        BlocPlat.appendChild(ul1);
    }
    
    //menus
    var BlocMenu = document.getElementById("bloc_menu");
    if(BlocMenu != null){
        var menus = VoyageCulinaire.getMenus();
        var ul2 = document.createElement("ul");
        
        for(var i = 0; i< VoyageCulinaire.getMenus().length; i++){
            var li = document.createElement("li");
            li.classList.add("menu");
            li.innerHTML = menus[i].getNom() + " : " +menus[i].getDescription();
            ul2.appendChild(li);
        }
        BlocMenu.appendChild(ul2);
    }
    

    //adresse : 
    var bloc_adresse = document.getElementById("contact");
    if(bloc_adresse != null){
        var adresse = document.createElement("p");
        adresse.classList.add("adresse");
        adresse.innerText = VoyageCulinaire.getAdresse();
        bloc_adresse.appendChild(adresse);
    }
    

    //equipe :
    var blocEquipe = document.getElementById("blocEquipe");
    if(blocEquipe != null){
        var ul3 = document.createElement("ul");
            blocEquipe.appendChild(ul3);
            for (var j = 0; j <= VoyageCulinaire.getEmployes().length; j++){
                var li3 = document.createElement("li");
                li3.classList.add("equipe");
                li3.innerHTML = VoyageCulinaire.getEmployes()[j].getNom();
                ul3.appendChild(li3);
            }
            
    }
   
}

function Reserver() {
    var R_nom = document.getElementById("input_nom_reservation").innerText;
    var R_date = document.getElementById("input_date_reservation").innerText;
    var R_nbpers = document.getElementById("input_nbpers_reservation").innerText;
    var newResa = new Reservation(R_nom, R_date, R_nbpers);
    VoyageCulinaire.addReservation(newResa);
    console.log(VoyageCulinaire.getReservation().getNom());
}

Init();