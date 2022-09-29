import {Restaurant} from './class/Restaurant';
import {Employe} from './class/Employe';

const VoyageCulinaire = new Restaurant("Voyage culinaire","12, rue de la vierge","06 12 12 12 12","Bistrot","12h-14h & 19h-23h","30");

const Sarah = new Employe("Sarah","Gely","35, route du Coquelicot","06 56 85 94 16","FR6210096000502376951846D60",Categorie.Employe_cuisine);
const Quaivine = new Employe("Quaivine","Michard","106, rue du potier","06 57 85 64 16","FR4312739000504738673495Y48",Categorie.Employe_cuisine);
const Pizza = new Employe("Pizza","Steve","2, rue de chez moi","06 57 85 64 16","FR7614508000407221865687I73",Categorie.Serveur);
const Catherine = new Employe("Catherine","Bonnevue","79, avenue de la S.P.A","07 95 10 06 46","FR7230003000403484712973K89",Categorie.Administratif);

VoyageCulinaire.addEmpl(Sarah);
VoyageCulinaire.addEmpl(Quaivine);
VoyageCulinaire.addEmpl(Pizza);
VoyageCulinaire.addEmpl(Catherine);