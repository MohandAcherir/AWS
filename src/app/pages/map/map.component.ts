import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.heat';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  ngOnInit() {
    const map = L.map('map').setView([48.7998,  2.1301], 13);// localisation de versailles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { // openstreetmap
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const data = [
      /*       le premier élément représente la latitude, le deuxième élément représente la longitude et 
            le troisième élément est un poids optionnel qui permet de donner une importance ou une intensité à 
            cette localisation pour les visualisations de type heatmap. */

      // Club Med Gym - 23 Rue de la Pompe, 75116 Paris, France
      [48.869593, 2.276697, 0.5],
      // Forest Hill Aquaboulevard - 4-6 Rue Louis Armand, 75015 Paris, France
      [48.835728, 2.272324, 0.5],
      // Neoness Gym Paris 13 - 15 Rue Paulin Enfert, 75013 Paris, France
      [48.821045, 2.345335, 0.5],
      // L'Usine - 8 Rue de la Michodière, 75002 Paris, France
      [48.869025, 2.332574, 0.5],
      // CMG Sports Club One Denfert - 38 Rue Denfert-Rochereau, 75014 Paris, France
      [48.834665, 2.334476, 0.5],
      // Basic-Fit Paris Bastille - 4 Rue Biscornet, 75012 Paris, France
      [48.853155, 2.375871, 0.5],
      // Fit Factory - 58 Rue de la Roquette, 75011 Paris, France
      [48.855562, 2.373315, 0.5],
      // Keep Cool Paris La Fayette - 35 Rue La Fayette, 75009 Paris, France
      [48.875242, 2.348739, 0.5],
      // CMG Sports Club One République - 33 Rue du Château d'Eau, 75010 Paris, France
      [48.870018, 2.360802, 0.5],
      // Neoness Gym Paris 18 - 86-88 Rue Championnet, 75018 Paris, France
      [48.893784, 2.337765, 0.5],
      // Pure Gym - 18 Rue de Berri, 75008 Paris, France
      [48.874409, 2.301747, 0.5],
      // CMG Sports Club One Italie - 2 Rue Bobillot, 75013 Paris, France
      [48.831914, 2.363321, 0.5],
      // Keep Cool Paris Réaumur - 105 Rue Réaumur, 75002 Paris, France
      [48.866535, 2.343622, 0.5],
      // Forest Hill - 21 Rue de la Pompe, 75116 Paris, France
      [48.868147, 2.275603, 0.5],
      // L'Appart Fitness Paris 15 Convention - 91 Rue de la Convention, 75015 Paris, France
      [48.835951, 2.293031, 0.5],
      // CMG Sports Club One Beaubourg - 7 Rue Saint-Merri, 75004 Paris, France
      [48.858647, 2.350069, 0.5],
      // Neoness Gym Paris 11 Popincourt - 19 Rue de la Pierre Levée, 75011 Paris, France
      [48.862184, 2.371967, 0.5],
      // Forest Hill Meudon La Forêt - 13 Rue Georges Langrognet, 92360 Meudon-la-Forêt, France
      [48.781244, 2.225225, 0.5],
      // CMG Sports Club One Maillot - 20 Avenue de la Porte Maillot,
      [48.792110, 2.150409, 0.2],//Forest Hill Versailles - 9 Rue des Etangs Gobert, 78000 Versailles, France
      [48.800985, 2.136607, 0.2],//Le Temple Club Versailles - 10 Rue Albert Sarraut, 78000 Versailles, France
      [48.797192, 2.132451, 0.2],//Neoness Gym Versailles - 3 Rue des Chantiers, 78000 Versailles, France
      [48.802524, 2.129394, 0.2],//Keep Cool Versailles - 5 Rue André Chénier, 78000 Versailles, France
      [48.798684, 2.129523, 0.2],//CMG Sports Club One Versailles - 13 Rue des Chantiers, 78000 Versailles, France
      [48.798655, 2.139263, 0.2],//Fitpark Versailles - 17 Avenue de Sceaux, 78000 Versailles, France
      [48.798817, 2.129563, 0.2],//Amazonia Versailles - 23 Rue des Chantiers, 78000 Versailles, France
      [48.769807, 2.008316, 0.2],//Club Forest Hill - 18 Rue Benjamin Franklin, 78190 Trappes, France 
      [48.780183, 2.200956, 0.2],//Keep Cool Vélizy-Villacoublay - 75 Rue Louis Breguet, 78140 Vélizy-Villacoublay, France
      [48.798247, 2.072495, 0.2],//Neoness Gym Saint-Cyr-L'école - 1 Rue Gabriel Péri, 78210 Saint-Cyr-l'École, France
      [48.799751, 2.142383, 0.5], // Keep Cool Versailles 
      [48.803042, 2.142211, 0.2], // Basic-Fit Versailles
      [48.800182, 2.149185, 0.3], // Magic Form Versailles
      [48.800079, 2.141196, 0.4], // Fit For You Versailles
      [48.875425, 2.324047, 0.2], // CMG One Beaubourg
      [48.869456, 2.332729, 0.3], // CMG One République
      [48.878013, 2.335774, 0.4], // CMG One Saint Lazare
      [48.880698, 2.342235, 0.5], // CMG One Italie
      [48.851038, 2.286765, 0.3], // CMG One Clichy
      [48.834309, 2.354407, 0.6], // CMG One Nation
      [48.844234, 2.396748, 0.4], // CMG One Daumesnil
      [48.844769, 2.337815, 0.5], // CMG One Bourse
      [48.854252, 2.298065, 0.2], // CMG One Charles de Gaulle
      [48.870102, 2.305176, 0.4], // CMG One Montparnasse
      [48.853773, 2.352751, 0.5], // CMG One Batignolles
      [48.837598, 2.274579, 0.2], // CMG One Porte de Versailles
      [48.847438, 2.266175, 0.3], // CMG One Boulogne
      [48.856291, 2.368965, 0.5], // CMG One Villiers
      [48.868330, 2.363716, 0.6], // CMG One Monceau
      [48.856817, 2.290777, 0.3], // CMG One Victor Hugo
      [48.855475, 2.339296, 0.4], // CMG One Ternes
      [48.850251, 2.288491, 0.5], // CMG One Wagram
      [48.882026, 2.355972, 0.4], // CMG One La Villette
      [48.846851, 2.281270, 0.6], // CMG One Saint Ouen
      [48.845925, 2.402401, 0.5], // CMG One Nationale
      [48.875960, 2.331388, 0.3], // CMG One Marais
      [48.837753, 2.343918, 0.2], // CMG One Tolbiac
      [48.857592, 2.311378, 0.5], // CMG One Trocadéro
      [48.870760, 2.342191, 0.6], // CMG One Caumartin
      [48.874148, 2.321530, 0.5], // CMG One Opéra
      [48.851267, 2.345925, 0.4], // CMG One Ponthieu
      [48.888176, 2.346888, 0.5],
      [48.874135, 2.291502, 0.5],
      [48.846254, 2.360467, 0.5],
      [48.854201, 2.347758, 0.5],
      [48.836119, 2.305222, 0.5],
      [48.855882, 2.372569, 0.5],
      [48.858859, 2.383632, 0.5],
      [48.848997, 2.389989, 0.5],
      [48.846254, 2.393509, 0.5],
      [48.840064, 2.368901, 0.5],
      [48.842836, 2.320875, 0.5],
      [48.854355, 2.311042, 0.5],
      [48.866399, 2.301209, 0.5],
      [48.884706, 2.292733, 0.5],
      [48.853668, 2.254907, 0.5],
      [48.840064, 2.293114, 0.5],
      [48.855882, 2.266677, 0.5],
      [48.880721, 2.289357, 0.5],
      [48.873744, 2.276647, 0.5],
      [48.857867, 2.216249, 0.5],
      [48.885297, 2.246293, 0.5],
      [48.847620, 2.262729, 0.5],
      [48.852784, 2.230685, 0.5],
      [48.865813, 2.190641, 0.5],
      [48.850401, 2.176384, 0.5],
      [48.864825, 2.166550, 0.5],
      [48.849587, 2.149327, 0.5],
      [48.860282, 2.126074, 0.5],
      [48.876004, 2.126417, 0.5],
      [48.877526, 2.155775, 0.5],

    ].map(coords => L.latLng(coords[0], coords[1], coords[2]));


    const heatmapConfig = { //configuration des couleurs de la heat map
      radius: 25,
      blur: 15,
      maxZoom: 10,
      gradient: {
        0.4: 'blue',
        0.6: 'green',
        0.8: 'yellow',
        1.0: 'red'
      }
    };

    const heatmapLayer = (L as any).heatLayer(data, heatmapConfig).addTo(map); // l'ajout des data dans la heatmap

  }
}
