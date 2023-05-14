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
    const map = L.map('map').setView([48.7998, 2.1301], 13);// localisation de versailles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { // openstreetmap
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);


      // add an icon at the center of the map
  const centerIcon = L.icon({
    iconUrl: '../../assets/images/uvsq.png',
    iconSize: [50,50], // set the size of the icon
    iconAnchor: [16, 16] // set the anchor point of the icon
  });

  const centerMarker = L.marker(map.getCenter(), { icon: centerIcon }).addTo(map);



    const data = [ //latitude, longitude,nom de la salle

      // Club Med Gym - 23 Rue de la Pompe, 75116 
      [48.869593, 2.276697, 'Club Med Gym'],
      // Forest Hill Aquaboulevard - 4-6 Rue Louis Armand, 75015 
      [48.835728, 2.272324, 'Forest Hill Aquaboulevard'],
      // Neoness Gym Paris 13 - 15 Rue Paulin Enfert, 75013 
      [48.821045, 2.345335, 'Neoness Gym Paris 13'],
      // L'Usine - 8 Rue de la Michodière, 75002 
      [48.867673, 2.329199, "L'Usine"],
      // Club Med Gym - 23 Rue de la Pompe, 75116 
      [48.869593, 2.276697, "Club Med Gym"],
      [48.835728, 2.272324, "Forest Hill Aquaboulevard - 4-6 Rue Louis Armand, 75015 Paris"],
      [48.821045, 2.345335, "Neoness Gym Paris 13 - 15 Rue Paulin Enfert, 75013 "],
      [48.867673, 2.329199, "L'Usine - 8 Rue de la Michodière, 75002 Paris"],
      [48.869593, 2.276697, "Club Med Gym - 23 Rue de la Pompe, 75116 Paris"],
      [48.835728, 2.272324, "Forest Hill Aquaboulevard - 4-6 Rue Louis Armand, 75015 Paris"],
      [48.821045, 2.345335, "Neoness Gym Paris 13 - 15 Rue Paulin Enfert, 75013 "],
      [48.869025, 2.332574, "L'Usine - 8 Rue de la Michodière, 75002 "],
      [48.834665, 2.334476, "CMG Sports Club One Denfert - 38 Rue Denfert-Rochereau, 75014 "],
      [48.853155, 2.375871, "Basic-Fit Paris Bastille - 4 Rue Biscornet, 75012 "],
      [48.855562, 2.373315, "Fit Factory - 58 Rue de la Roquette, 75011 "],
      [48.875242, 2.348739, "Keep Cool Paris La Fayette - 35 Rue La Fayette, 75009 "],
      [48.870018, 2.360802, "CMG Sports Club One République - 33 Rue du Château d'Eau, 75010 "],
      [48.893784, 2.337765, "Neoness Gym Paris 18 - 86-88 Rue Championnet, 75018 "],
      [48.874409, 2.301747, "Pure Gym - 18 Rue de Berri, 75008 "],
      [48.831914, 2.363321, "CMG Sports Club One Italie - 2 Rue Bobillot, 75013 "],
      [48.866535, 2.343622, "Keep Cool Paris Réaumur - 105 Rue Réaumur, 75002 "],
      [48.868147, 2.275603, "Forest Hill - 21 Rue de la Pompe, 75116 "],
      [48.835951, 2.293031, "L'Appart Fitness Paris 15 Convention - 91 Rue de la Convention, 75015 "],
      [48.858647, 2.350069, "CMG Sports Club One Beaubourg - 7 Rue Saint-Merri, 75004"],
      [48.862184, 2.371967, "Neoness Gym Paris 11 Popincourt - 19 Rue de la Pierre Levée, 75011"],
      [48.781244, 2.225225, "Forest Hill Meudon La Forêt - 13 Rue Georges Langrognet, 92360 Meudon-la-Forêt"],
      [48.792110, 2.150409, "CMG Sports Club One Maillot - 20 Avenue de la Porte Maillot"],
      [48.800985, 2.136607, "Forest Hill Versailles - 9 Rue des Etangs Gobert, 78000 Versailles"],
      [48.797192, 2.132451, "Le Temple Club Versailles - 10 Rue Albert Sarraut, 78000 Versailles"],
      [48.802524, 2.129394, "Neoness Gym Versailles - 3 Rue des Chantiers, 78000 Versailles"],
      [48.798684, 2.129523, "Keep Cool Versailles - 5 Rue André Chénier, 78000 Versailles"],
      [48.798655, 2.139263, "CMG Sports Club One Versailles - 13 Rue des Chantiers, 78000 Versailles"],
      [48.798817, 2.129563, "Fitpark Versailles - 17 Avenue de Sceaux, 78000 Versailles"],
      [48.769807, 2.008316, "Amazonia Versailles - 23 Rue des Chantiers, 78000 Versailles"],
      [48.780183, 2.200956, "Club Forest Hill - 18 Rue Benjamin Franklin, 78190 Trappes"],
      [48.798247, 2.072495, "Keep Cool Vélizy-Villacoublay - 75 Rue Louis Breguet, 78140 Vélizy-Villacoublay"],
      [48.799751, 2.142383, "Keep Cool Versailles"],
      [48.803042, 2.142211, "Basic-Fit Versailles"],
      [48.800182, 2.149185, "Magic Form Versailles"],
      [48.800079, 2.141196, "Fit For You Versailles"],
      [48.875425, 2.324047, "CMG One Beaubourg"],
      [48.869456, 2.332729, "CMG One République"],
      [48.878013, 2.335774, "CMG One Saint Lazare"],
      [48.880698, 2.342235, "CMG One Italie"],
      [48.851038, 2.286765, "CMG One Clichy"],
      [48.834309, 2.354407, "CMG One Nation"],
      [48.844234, 2.396748, "CMG One Daumesnil"],
      [48.844769, 2.337815, "CMG One Bourse"],
      [48.854252, 2.298065, "CMG One Charles de Gaulle"],
      [48.870102, 2.305176, "CMG One Montparnasse"],
      [48.853773, 2.352751, "CMG One Batignolles"],
      [48.837598, 2.274579, "CMG One Porte de Versailles"],
      [48.847438, 2.266175, "CMG One Boulogne"],
      [48.856291, 2.368965, "CMG One Villiers"],
      [48.868330, 2.363716, "CMG One Monceau"],
      [48.856817, 2.290777, "CMG One Victor Hugo"],
      [48.855475, 2.339296, "CMG One Ternes"],
      [48.850251, 2.288491, "CMG One Wagram"],
      [48.882026, 2.355972, "CMG One La Villette"],
      [48.846851, 2.281270, "CMG One Saint Ouen"],
      [48.845925, 2.402401, "CMG One Nationale"],
      [48.875960, 2.331388, "CMG One Marais"],
      [48.837753, 2.343918, "CMG One Tolbiac"],
      [48.857592, 2.311378, "CMG One Trocadéro"],
      [48.870760, 2.342191, "CMG One Caumartin"],
      [48.874148, 2.321530, "CMG One Opéra"],
      [48.851267, 2.345925, "CMG One Ponthieu"]
    ];

    const markerIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/images/marker-shadow.png',
      shadowSize: [41, 41]
    });

    data.forEach(coords => {
      const marker = L.marker([Number(coords[0]), Number(coords[1])], { icon: markerIcon }).addTo(map);
      marker.bindPopup(String(coords[2]));
    });
  }
}