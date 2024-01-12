"use client";
import Member from "./tools/Member";
import axios from "axios";
import React from "react";
import Header from "../tools/global_layout/Header";
import TeamDisplay from "./tools/TeamDisplay";

class Page extends React.Component {
  members: { [key: string]: any } = {};
  state = { details: {} }
  componentDidMount() {
    let models;
    axios.get('http://127.0.0.1:8000/')
    .then(res => {
      models = res.data;
      let results: { [key: string]: any } = {};
      for (let model in models) {
        let url = models[model]
        axios.get(url)
        .then(res => {
          results[model] = res.data;
        })
      }
      this.setState({ details: results});
    })
    .catch(err => {});
  }
  componentDidUpdate(prevProps: any, prevState: any) {
    this.members = this.state.details;
  }

  render(){
    return (
      <div>
        <Header bg={'/members/bg_membres.jpg'} title="Nos Membres" subtitle="Qui sommes nous ?" paragraph="Aucune association n'existe sans ses membres. Nous sommmes maintenant plus de 30 étudiants à activement participer aux projets aérospatiaux, répartis dans différents projets, rôles et équipes. Découvrez nos membres !"/>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft:'25rem', marginRight:'25rem', marginTop:'3rem', marginBottom:'3rem' }}>
        <text className="title-text navy">2023/2024</text>
          <div style={{ marginLeft: '2rem' }}>
            <select>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column', textAlign: 'center' }}>
          <Member first_name="Jean" last_name="Choppin de Janvry" image="/members/P25/jean_choppin_de_janvry.jpeg" linkedin="https://www.linkedin.com/in/jean-choppin-de-janvry/" gpa_year={2022} roles_project={{ 'HyMir': 'Respo Propulsion' }} teams_project={{'HyMir':'Mécanique'}} mail="mailto:jean.choppin-de-janvry@student-cs.fr" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column', textAlign: 'center', marginLeft:'25rem', marginRight:'25rem' }}>
          {/*<TeamDisplay></TeamDisplay>*/}
        </div>
        <text>{JSON.stringify(this.members, null, 2)}</text>
      </div>
    );
  };
}

export default Page;
