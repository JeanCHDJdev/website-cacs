import React from 'react';
import Paragraph from '../tools/text_display/Paragraph';

const Page = () => {
    return (
        <div>
            <text className='title-text navy' style={{textAlign:'center', display:'flex', justifyContent:'center', marginRight:'15%', marginLeft:'15%', marginBottom:'4rem', marginTop:'4rem'  }}>Notre base d'opérations</text>
            <div style={{justifyContent:'center', display:'flex', marginLeft: '10%', marginRight: '10%', marginBottom:'10%', alignContent:'center'}} className='map'>
                <div style={{display:'flex', flexDirection:'column', marginRight:'4rem', width:'30rem'}}>
                    <p className='title-text small navy' style={{borderBottom:'solid 0.5rem darkblue'}}>CentraleSupélec</p>
                    <p className='regular-text navy' style={{marginTop:'2rem'}}>9 Rue Joliot Curie</p>
                    <p className='regular-text navy'>Bâtiment Bouygues</p>
                    <p className='regular-text navy'>91190 Gif-sur-Yvette</p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12402.000643162923!2d2.174548588671042!3d48.71656089718781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67f2d28a0436f%3A0x6cc79d3b821ba80d!2sCentraleSup%C3%A9lec%20-%20B%C3%A2timent%20Bouygues!5e0!3m2!1sfr!2sfr!4v1704160778015!5m2!1sfr!2sfr" width="800" height="500" style={{border:0, width:'100%'}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Paragraph 
                image='/hackathon/minif_halle.jpg'
                imageName='LaFabrique'
                imagePosition='left'
                imageWidth='45rem'
                text="Nous travaillons au FabLab de l'école, LaFabrique, ainsi qu'au local technique juste en face. Les équipements et ressources disponibles nous permettent de mener à bien nos projets !"
            />
            <text className='regular-text navy' style={{textAlign:'center', display:'flex', justifyContent:'center', marginBottom:'2rem', marginTop:'2rem', marginRight:'10%', marginLeft:'10%' }}>Une question ? Une demande ? Vous souhaitez rejoindre l'association ? N'hésitez pas à nous contacter via nos réseaux sociaux ou lors du tour des associations !</text>
            {/*<text className='title-text navy' style={{textAlign:'center', display:'flex', justifyContent:'center', marginBottom:'4rem', marginTop:'4rem' }}>Formulaire de contact</text>
            <form style={{display:'flex', justifyContent:'center', alignContent:'center', flexDirection:'column', marginRight:'30rem', marginLeft:'30rem'}}>
                <label htmlFor="nom" className='regular-text navy' style={{ marginTop:'2rem'}}>Nom :</label>
                <input type="text" id="nom" name="nom" required className="input-box"/>

                <label htmlFor="email" className='regular-text navy' style={{ marginTop:'2rem'}}>E-mail :</label>
                <input type="email" id="email" name="email" required className="input-box"/>

                <label htmlFor="sujet" className='regular-text navy' style={{ marginTop:'2rem'}}>Sujet :</label>
                <input type="text" id="sujet" name="sujet" required className="input-box"/>

                <label htmlFor="message" className='regular-text navy' style={{ marginTop:'2rem'}}>Message :</label>
                <textarea id="message" name="message" rows={6} required className="input-box"/>

                <button className='alt-buttons' style={{zIndex:6, marginTop:'2rem', filter:'invert(1)'}} type="submit">Envoyer</button>
    </form>*/}
        </div>
    );
};

export default Page;
