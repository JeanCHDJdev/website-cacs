import Member from "./members-tools/Member";

const Page = () => {
    return (
        <div>
            <div style={{ position: 'relative', zIndex: '1', height: '70rem' }}>
                <img src="/members/bg_membres.jpg" style={{ objectFit: 'cover', objectPosition: 'center', height: '70rem', filter: 'brightness(72%)', width:'100%' }} />
                <text className='title-text huge white' style={{ textAlign: 'center', zIndex: '5', position: 'absolute', left: '10rem', top: '40rem'}}>Nos Membres</text>
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '18rem', backgroundColor: 'white' }}>
                    <text className='title-text navy' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '4.5rem', marginBottom:'4.5rem', zIndex:3}}>Qui sommes-nous ?</text>
                    <p className='regular-text navy' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '20rem', marginRight: '20rem', marginBottom:'2rem', zIndex:3}}>Aucune association n'existe sans ses membres. Nous sommmes maintenant plus de 30 étudiants à activement participer aux projets aérospatiaux, répartis dans différents projets, rôles et équipes. Découvrez nos membres !</p>
                </div>  
                <text className='title-text huge navy' style={{ textAlign: 'center', zIndex: '5', marginLeft: '20rem', marginRight: '20rem'}}>Nos Membres</text>
            </div>
            <Member first_name="Jean" last_name="Choppin de Janvry" image="/members/P25/jean_choppin_de_janvry.jpeg" linkedin="https://www.linkedin.com/in/jean-choppin-de-janvry/" gpa_year={2022} roles_project={{ 'HyMir': 'Respo Propulsion' }} teams_project={{'HyMir':'Mécanique'}} mail="mailto:jean.choppin-de-janvry@student-cs.fr" />
        </div>
    );
};

export default Page;
