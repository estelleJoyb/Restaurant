import {Restaurant} from './class/Restaurant';
import {Employe} from './class/Employe';
import {Stock} from './class/Stock';
import {Plat} from './class/Plat';
import {Menu} from './class/Menu';
import {Reservation} from './class/Reservation';

const VoyageCulinaire = new Restaurant("Voyage culinaire","12, rue de la vierge","06 12 12 12 12",TypeRestaurant.Bistro,"12h-14h & 19h-23h","30");

//employés
const Sarah = new Employe("Sarah","Gely","35, route du Coquelicot","06 56 85 94 16","FR6210096000502376951846D60",Categorie.Employe_cuisine);
const Quaivine = new Employe("Quaivine","Michard","106, rue du potier","06 57 85 64 16","FR4312739000504738673495Y48",Categorie.Employe_cuisine);
const Pizza = new Employe("Pizza","Steve","2, rue de chez moi","06 57 85 64 16","FR7614508000407221865687I73",Categorie.Serveur);
const Catherine = new Employe("Catherine","Bonnevue","79, avenue de la S.P.A","07 95 10 06 46","FR7230003000403484712973K89",Categorie.Administratif);

VoyageCulinaire.addEmpl(Sarah);
VoyageCulinaire.addEmpl(Quaivine);
VoyageCulinaire.addEmpl(Pizza);
VoyageCulinaire.addEmpl(Catherine);

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