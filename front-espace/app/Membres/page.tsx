"use client";
import Member from "./tools/Member";
import axios from "axios";
import React, {useState, useEffect} from "react";
import Header from "../tools/global_layout/Header";

const Page = () => {
  const [data, setData] = useState<{ [key: string]: string }>();
  const [details, setDetails] = useState<{ [key: string]: any }>([]);
  const roles = details["roles"];
  const connexions = details["memberroles"]
  const projects = details["projets"];
  
  useEffect(() => {
      axios.get('http://127.0.0.1:8000/')
          .then(response => {
              setData(response.data);
          })
          .catch(error => {
              console.error('Error fetching data:', error);
  })}, []);

  useEffect(() => {
    const fetchData = async () => {
      const results: { [key: string]: any } = {};
      for (let key in data) {
        const url = data[key];
        try {
          const response = await axios.get(url);
          results[key] = response.data;
        } catch (error) {
          console.error(`Error fetching data for key ${key}:`, error);
        }
      }
      setDetails(results);
    };

    fetchData();
  }, [data]);

  const sortMembers = (members: any[]) => {
    const sortedMembers = members.sort((a: any, b: any) => {
      
      const memberAPriorities = a.roles.map((roleId: number) => roles[roleId-1].priority);
      const memberBPriorities = b.roles.map((roleId: number) => roles[roleId-1].priority);
      const prio = Math.min(...memberAPriorities) - Math.min(...memberBPriorities)
      if(prio === 0)
      {
        return b.promo-a.promo; // On trie par promo décroissante
      }
      return prio;
    });

    return sortedMembers;
  };

  const sortRolesByPriority = (roles: any[]) => {
    const sortedRoles = roles.sort((a: any, b: any) => {
      return a.priority - b.priority;
    });
    return sortedRoles;
  };

  const getMembersToShow = (): any[] => {
    const members = details["membres"];

    if (Array.isArray(members)) {
      const sortedMembers = sortMembers(members);
      return sortedMembers;
    }
    else
    {
      return [];
    }
  };

  const getRolesToShowByMember = (membre: { [key: string]: any }, projects?:[string]): { [key: string]: string } => {
    const role_project_dict: { [key: string]: string } = {};
    const member_role_project_table = connexions
      .filter((connexion: any) => connexion.member === membre.id)
      .sort((a: any, b: any) => {
        return roles[b.role-1].priority - roles[a.role-1].priority;
      });

    member_role_project_table.forEach((connexion: any) => {
      const role = roles[connexion.role-1];
      const projet = details["projets"][connexion.project-2];
      role_project_dict[projet.nom] = role.nom_fr + ' ' + connexion.year;
    });

    return role_project_dict;
  };

  return (
    <div>
      <Header bg={'/members/bg_membres.jpg'} title="Nos Membres" subtitle="Qui sommes nous ?" paragraph="Aucune association n'existe sans ses membres. Nous sommmes maintenant plus de 30 étudiants à activement participer aux projets aérospatiaux, répartis dans différents projets, rôles et équipes. Découvrez nos membres !" />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft:'20rem', marginRight:'20rem', marginTop:'3rem', marginBottom:'3rem' }}>
        <p className="title-text navy">Membres</p>
        <div>
          <select className="classic-dropdown" defaultValue='Default' id={'project-select'}>
            <option value='Default'>Tous les projets</option>
            {Array.isArray(details["projets"]) && details["projets"].map((project) => (
              <option key={project.id} value={project.nom}>{project.nom}</option>
            ))}
          </select>
          <select className="classic-dropdown" defaultValue='Default' id={'year-select'}>
              <option value='Default'>Tous les membres</option>
              <option value="2023/2024">2023/2024</option>
              <option value="2022/2023">2022/2023</option>
              <option value="2021/2022">2021/2022</option>
              <option value="2020/2021">2020/2021</option>
            </select>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginLeft: '20rem', marginRight: '20rem', alignContent:'center', justifyContent:'center' }}>
          {getMembersToShow().map((membre: any) => (
            <Member
              key={membre.id}
              first_name={membre.prenom}
              last_name={membre.nom}
              image={membre.photo}
              linkedin={membre.linkedin}
              promo={membre.promo}
              roles_project={getRolesToShowByMember(membre)}
              mail={membre.mail}
            />
          ))}
        </div>
      </div>
  );
};

export default Page;