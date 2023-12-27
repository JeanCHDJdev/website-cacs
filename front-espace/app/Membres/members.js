//DISCLAIMER : Ce fichier répertorie les membres de l'association. Il a été très long à concevoir. Veuillez le modifier avec parcimonie.
//DISCLAIMER : This file lists the members of the association. It was very long to design. Please modify it sparingly.
// Je considère que ce n'est pas un travail dantesque d'ajouter les membres de l'association. Il faut cependant être très régulier.
// Roles
const Role = {
    VP_Espace: 'VP Espace',
    Respo : 'Responsable',
    R_Meca: 'Responsable Mécanique',
    R_Elec: 'Responsable Electronique',
    R_Soft: 'Responsable Software',
    R_Propulsion: 'Responsable Propulsion',
    R_Com: 'Responsable Communication',
    R_Depenses: 'Responsable Dépenses',
    // Add more roles here if needed
    Membre: 'Membre',
    GDA: '2A',
};
const Equipes = {
    Meca: 'Mécanique',
    Elec: 'Electronique',
    Soft: 'Software',
    Combustion: 'Combustion',
    Hydraulique: 'Hydraulique',
    // Add more teams here if needed
}
const Projets = {
    //Mini-fusée
    Nyx: 'Nyx', 
    //Ballon
    Ballon: 'Ballon',
    //FusEx
    AjaCS: 'AjaCS',
    PheniCS: 'PheniCS',
    Sirius: 'Sirius',
    //Moteur-fusée
    Hymir: 'Hymir',
    //Add more projects here if needed
};

//Equipe 1 : PheniCS

const teamMembers = [
//P23
    { id: 1, name: 'Paul-Emile Giacomelli', image: '../../public/members/P23/paul_emile_giacomelli.jpeg', prom:23, role:[Role.VP_Espace, Role.Membre], equipe: [Equipes.Meca], projects: [Projets.AjaCS], year:(2021,2022)},
    { id: 2, name: 'Luisa Mazzonzelli', image: '../../public/members/P23/luisa_mazzonzelli.jpeg', prom:23, role:[Role.Respo, Role.Membre], equipe: [Equipes.Meca,Equipes.Elec], projects: [Projets.AjaCS], year:(2021,2022)},
    { id: 3, name: 'Clement Pouilly', image: './../public/members/P23/clement_pouilly.png', prom:23, role:[Role.R_Soft, Role.Membre], equipe: [Equipes.Meca,Equipes.Elec,Equipes.Soft], projects: [Projets.AjaCS],year:(2022,2023)},
//P24
    { id: 4, name: 'Thomas Boquet', image: '../../public/members/P24/thomas_boquet.jpg', prom:24, role:[Role.VP_Espace, Role.Membre], equipe: [Equipes.Elec], projects: [Projets.AjaCS], year:(2022,2023)},
//P25

//P26
  ];

const AjaCS = [
    {year: 2021, members: [[],[1,2]]},
    {year: 2022, members: [[1,2],[3,4]]},
];
const PheniCS = [
    {year: 2023, members: [[3,4],[]]},
];
const Sirius = [
    {year: 2023, members: [1,2]},
];