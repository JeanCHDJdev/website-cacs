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

  const [projectToDisplay, setProjectToDisplay] = useState<number>(0);
  
  const promos : string[] = ['2024', '2023', '2022', '2021'];
  const [promosToShow, setPromosToShow] = useState<string[]>(promos);

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
      if(a.promo === b.promo)
      {
        const memberAPriorities = a.roles.map((roleId: number) => roles[roleId-1].priority);
        const memberBPriorities = b.roles.map((roleId: number) => roles[roleId-1].priority);
        return Math.min(...memberAPriorities) - Math.min(...memberBPriorities);
      }
      return b.promo - a.promo;
    });

    return sortedMembers;
  };

  const getMembersToShow = (annee?:string, projet?:number): any[] => {
    let members: any[] = [];
    if(Array.isArray(details["membres"])) 
    {
      members = [...details["membres"]];
    } 
    {Array.isArray(members) && members.map((membre:any) => 
      {connexions
        .filter((connexion: any) => connexion.member === membre.id)
        .map((connexion: any) => {
          console.log(connexion.year, annee, 'projets :',connexion.project, projet)
          if ((annee !== 'Default' && annee !== undefined && connexion.year !== parseInt(annee)) 
            || (projet !== 0 && projet !== undefined && !connexions.some((connexion: any) => connexion.member === membre.id && connexion.project === projet)))
          {
            members.splice(members.indexOf(membre), 1, '');
          }
        })
      });
    }
    if (Array.isArray(members)) {
      members = members.filter((member) => member !== '');
      return sortMembers(members);
    }
    else
    {
      return [];
    }
  };

  const getRolesToShowByMember = (membre: { [key: string]: any }, annee?:string, projet?:number): { [key: string]: [string] } => {
    const role_project_dict: { [key: string]: [string] } = {};
    const member_role_project_table = connexions
      .filter((connexion: any) => connexion.member === membre.id)
      .sort((a: any, b: any) => {
        return roles[b.role-1].priority - roles[a.role-1].priority;
      });

    member_role_project_table.forEach((connexion: any) => {
      if((annee !== undefined && connexion.year !== parseInt(annee)) || (projet !== undefined) && connexion.project !== projet)
      {
        return;
      }
      const role = roles[connexion.role-1];
      const project = details["projets"][connexion.project-2];
      if (role_project_dict[project.nom]) {
        role_project_dict[project.nom].push(role.nom_fr + ' ' + connexion.year);
      } else {
        role_project_dict[project.nom] = [role.nom_fr + ' ' + connexion.year];
      }
    });

    return role_project_dict;
  };

  const handleProjectSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const projectToShow = event.target.value;
    console.log(event.target.value, 'project change');
    if(projectToShow === 'Default')
    {
      setPromosToShow(promos);
      setProjectToDisplay(0);
      return;
    }
    setProjectToDisplay(parseInt(projectToShow));

    const yearSelect = document.getElementById('year-select') as HTMLSelectElement;
    if (yearSelect) {
      setPromosToShow(promos);
      yearSelect.selectedIndex = 0;
    } // This allows to reset dropdowns when the other one is changed
  };
  const handleYearSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value, 'year change');
    const yearsToShow = event.target.value;
    if(yearsToShow === 'Default')
    {
      setPromosToShow(promos);
      setProjectToDisplay(0);
      return;
    }
    setPromosToShow([yearsToShow.split('/')[1],yearsToShow.split('/')[0]])

    const projectSelect = document.getElementById('project-select') as HTMLSelectElement;
    if (projectSelect) {
      projectSelect.selectedIndex = 0;
      setProjectToDisplay(0);
    } // This allows to reset dropdowns when the other one is changed
  };

  return (
    <div>
      <Header bg={'/members/bg_membres.jpg'} title="Nos Membres" subtitle="Qui sommes nous ?" paragraph="Aucune association n'existe sans ses membres. Nous sommmes maintenant plus de 30 étudiants à activement participer aux projets aérospatiaux, répartis dans différents projets, rôles et équipes. Découvrez nos membres !" />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft:'20rem', marginRight:'20rem', marginTop:'3rem', marginBottom:'3rem' }}>
        <p className="title-text navy">Membres</p>
        <div>
          <select className="classic-dropdown" defaultValue='Default' id={'project-select'} onChange={handleProjectSelectChange}>
            <option value='Default'>Tous les projets</option>
            {Array.isArray(details["projets"]) && details["projets"].map((project) => (
              <option key={project.id} value={project.id}>{project.nom}</option>
            ))}
          </select>
          <select className="classic-dropdown" defaultValue='Default' id={'year-select'} onChange={handleYearSelectChange}>
              <option value='Default'>Tous les membres</option>
              <option value="2023/2024">2023/2024</option>
              <option value="2022/2023">2022/2023</option>
              <option value="2021/2022">2021/2022</option>
              <option value="2020/2021">2020/2021</option>
            </select>
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: projectToDisplay === 0 ? 'wrap' : 'nowrap', marginLeft: '20rem', marginRight: '20rem'}}>
            {promosToShow
            .map((promo : string) => (
              <div key={promo} style={{ display: 'flex', flexDirection: 'column'}}>
                {projectToDisplay === 0 && <p className="title-text navy">{promo}</p>}
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                  {getMembersToShow(promo, projectToDisplay === 0 ? undefined : projectToDisplay)
                    .map((membre: any) => (
                        membre.ok_to_be_displayed && (
                        <Member
                          key={membre.id}
                          first_name={membre.prenom}
                          last_name={membre.nom}
                          image={membre.photo}
                          linkedin={membre.linkedin}
                          promo={membre.promo}
                          roles_project={getRolesToShowByMember(membre, promo, projectToDisplay === 0 ? undefined : projectToDisplay)}
                          mail={membre.email}
                        />
                      )))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Page;