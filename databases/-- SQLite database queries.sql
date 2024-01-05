-- SQLite
/*CREATE TABLE Members (
    member_id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT,
    linkedin TEXT,
    image TEXT DEFAULT '/members/unkown_user.jpg',
    gpa_year INTEGER NOT NULL, --première année dans l'association
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE Projects (
    project_id INT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    image TEXT,
    start_year INT
);
CREATE TABLE Roles (
    role_id INT PRIMARY KEY,
    role_name VARCHAR(255)
);
CREATE TABLE Teams (
    team_id INT PRIMARY KEY,
    team_name VARCHAR(255)
);
CREATE TABLE MemberProjectTeams (
    member_id INT,
    project_id INT,
    team_id INT,
    PRIMARY KEY (member_id, project_id, team_id),
    FOREIGN KEY (member_id) REFERENCES Members(member_id),
    FOREIGN KEY (project_id) REFERENCES Projects(project_id),
    FOREIGN KEY (team_id) REFERENCES Teams(team_id)
);
CREATE TABLE MemberProjectRoles (
    member_id INT,
    project_id INT,
    role_id INT,
    participation_year INT, --if participated during 2022-2023, then 2022
    PRIMARY KEY (member_id, project_id, role_id),
    FOREIGN KEY (member_id) REFERENCES Members(member_id),
    FOREIGN KEY (project_id) REFERENCES Projects(project_id),
    FOREIGN KEY (role_id) REFERENCES Roles(role_id)
);*/

/*INSERT INTO Members (
    first_name, 
    last_name, 
    email, 
    linkedin,
    image, 
    gpa_year) 
    VALUES (
    'Lisa', 
    'Bochet',
    'lisa.bochet@student-cs.fr',
    'https://www.linkedin.com/in/lisa-bochet-b5a69124a/', 
    '/members/P26/lisa_bochet.jpeg',
    2023);*/

/*INSERT INTO Projects (
    project_id,
    name,
    description,
    image,
    start_year,
    end_year,
    flight_status,
    project_type)
    VALUES (
    4,
    'HyMir',
    'Première fusée bi-étage de l''association, utilisant un ambitieux système de séparation pneumatique.',
    '/projets/patchs/patch HyMir.png',
    2022,
    2023,
    'En cours de projet');*/

/*INSERT INTO Roles (
    role_id,
    role_name)
    VALUES (
    1,
    'VP Espace');*/

/*INSERT INTO Teams (
    team_id,
    team_name)
    VALUES (
    4,
    'Propulsion');*/

/* Projects by ID :
1 - AjaCS
2 - PheniCS
3 - Sirius
4 - HyMir
5 - Nyx
*/
/* Roles by ID :
1 - VP Espace
2 - Responsable Electronique
3 - Responable Mécanique
4 - Responsable Software
5 - Responsable Propulsion
6 - Responsable Communication
7 - Responsable des dépenses
8 - Membre
*/
/* Teams by ID :
1 - Mécanique
2 - Electronique
3 - Software
4 - Propulsion
*/

/*INSERT INTO MemberProjectTeams (
    member_id,
    project_id,
    team_id)
    VALUES (
    3,
    2,
    2);  
INSERT INTO MemberProjectTeams (
    member_id,
    project_id,
    team_id)
    VALUES (
    3,
    2,
    2);  
INSERT INTO MemberProjectTeams (
    member_id,
    project_id,
    team_id)
    VALUES (
    3,
    1,
    1);  
INSERT INTO MemberProjectRoles (
    member_id,
    project_id,
    role_id,
    participation_year,
    end_participation_year)
    VALUES (
    3,
    1,
    8,
    2021,
    2022);
INSERT INTO MemberProjectRoles (
    member_id,
    project_id,
    role_id,
    participation_year,
    end_participation_year)
    VALUES (
    3,
    1,
    4,
    2022,
    2023);
    
SELECT * FROM Members;*/


