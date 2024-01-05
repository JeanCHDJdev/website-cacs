import React from 'react';

const Page = () => {
    return (
        <div>
            {/*<div style={{ position: 'relative', zIndex: '1', height: '59rem' }}>
                <img src="/contact/bg_contact.jpg" style={{ objectFit: 'cover', objectPosition: 'center', height: '55rem', filter: 'brightness(72%)', width:'100%' }} />
                <text className='title-text huge white' style={{ textAlign: 'center', zIndex: '5', position: 'absolute', left: '10rem', top: '45rem'}}>Nous contacter</text>
            </div>*/}
            <text className='title-text navy' style={{textAlign:'center', display:'flex', justifyContent:'center', marginBottom:'4rem', marginTop:'4rem' }}>Notre base d'opérations</text>
            <div style={{justifyContent:'center', display:'flex', marginLeft: '25rem', marginRight: '25rem', marginBottom:'5rem'}}>
                <div style={{display:'flex', flexDirection:'column', marginRight:'4rem', width:'30rem'}}>
                    <p className='title-text small navy' style={{borderBottom:'solid 0.5rem darkblue'}}>CentraleSupélec</p>
                    <p className='regular-text navy' style={{marginTop:'2rem'}}>9 Rue Joliot Curie</p>
                    <p className='regular-text navy'>Bâtiment Bouygues</p>
                    <p className='regular-text navy'>91190 Gif-sur-Yvette</p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12402.000643162923!2d2.174548588671042!3d48.71656089718781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67f2d28a0436f%3A0x6cc79d3b821ba80d!2sCentraleSup%C3%A9lec%20-%20B%C3%A2timent%20Bouygues!5e0!3m2!1sfr!2sfr!4v1704160778015!5m2!1sfr!2sfr" width="800" height="500" style={{border:0, width:'70rem'}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div style={{justifyContent:'center', display:'flex', flexDirection:'row', marginLeft: '25rem', marginRight: '25rem'}}>
                <img src='/hackathon/minif_halle.jpg' style={{ width:'45rem'}} />
                <p className='regular-text navy' style={{marginLeft:'2rem'}}>Nous travaillons au FabLab de l'école, LaFabrique, ainsi qu'au local technique juste en face. Les équipements et ressources disponibles nous permettent de mener à bien nos projets !</p> 
            </div>
            <text className='title-text navy' style={{textAlign:'center', display:'flex', justifyContent:'center', marginBottom:'4rem', marginTop:'4rem' }}>Formulaire de contact</text>
            <text className='regular-text navy' style={{textAlign:'center', display:'flex', justifyContent:'center', marginBottom:'2rem', marginTop:'2rem', marginRight:'25rem', marginLeft:'25rem' }}>Une question ? Une demande ? Remplissez le formulaire de contact ci-dessous et nous reviendrons vers vous au plus vite !</text>
            <form style={{display:'flex', justifyContent:'center', alignContent:'center', flexDirection:'column', marginRight:'30rem', marginLeft:'30rem'}}>
                <label htmlFor="nom" className='regular-text navy' style={{ marginTop:'2rem'}}>Nom :</label>
                <input type="text" id="nom" name="nom" required />

                <label htmlFor="email" className='regular-text navy' style={{ marginTop:'2rem'}}>E-mail :</label>
                <input type="email" id="email" name="email" required className="input-box"/>

                <label htmlFor="sujet" className='regular-text navy' style={{ marginTop:'2rem'}}>Sujet :</label>
                <input type="text" id="sujet" name="sujet" required />

                <label htmlFor="message" className='regular-text navy' style={{ marginTop:'2rem'}}>Message :</label>
                <textarea id="message" name="message" rows={6} required></textarea>

                <button className='alt-buttons' style={{zIndex:6, marginTop:'2rem'}} type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default Page;
