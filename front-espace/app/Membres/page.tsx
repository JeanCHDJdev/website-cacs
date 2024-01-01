import TeamDisplay from "../tools/members/TeamDisplay";
import Member from "../tools/members/Member";

const Page = () => { 

    return (
        <div>
            <div style={{ position: 'relative', zIndex: '1', height: '70rem' }}>
                <img src="/members/bg_membres.jpg" style={{ objectFit: 'cover', objectPosition: 'center', height: '100%', filter: 'brightness(72%)', width:'100%' }} />
                <text className='title-text huge white' style={{ textAlign: 'center', zIndex: '5', position: 'absolute', left: '10rem', top: '40rem'}}>Nos projets</text>
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '18rem', backgroundColor: 'white' }}>
                    <text className='title-text navy' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '4.5rem', marginBottom:'4.5rem', zIndex:3}}>Nos Membres</text>
                    <p className='regular-text navy' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '20rem', marginRight: '20rem', marginBottom:'2rem', zIndex:3}}>Depuis 2021, nous acceuillons chaque année de nouveaux projets, des fusées expérimentales aux moteurs-fusées. Toujours plus exigeants et motivants, ils portent l'association vers de nouvelles altitudes. Vous pouvez ici découvrir un historique des projets du pôle espace.</p>
                </div>
            </div>
        </div>
    );
};

export default Page;
