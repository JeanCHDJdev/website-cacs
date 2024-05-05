"use client";
import React from 'react';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import Slideshow from '../tools/Slideshow';
import Header from '../tools/global_layout/Header';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import Paragraph from '../tools/text_display/Paragraph';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const PlaquettePoleEspace = '/pdfs/Devenir-Partenaire/PlaquettePoleEspace.pdf';

const PageComponent: React.FC = () => {
    const [maxPageNumber, setMaxPageNumber] = useState(0);

    const handleDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setMaxPageNumber(numPages);
    };

    const pdfPages = (maxPageNumber: number): JSX.Element[] => {
        const pages: JSX.Element[] = [];
        for (let i = 1; i <= maxPageNumber; i++) {
            pages.push(
                <Page key={i} pageNumber={i} style={{width:'60%', height:'1%'}}>
                </Page>
            );
        }
        return pages;
    };

    const handleDownload = () => {
        window.open(PlaquettePoleEspace, '_blank');
    };

    return (
        <div>
            <Header
                bg='/soutiens/bg_partenaires.jpg'
                title="Devenir partenaire"
                subtitle='Nos projets volent grâce à la générosité de nos partenaires !'
            />
            <Paragraph
                image='/soutiens/centralesupelec.png'
                imageName='CentraleSupelec'
                imagePosition='right'
                imageWidth='30rem'
                text="Notre école, CentraleSupélec, est parmi les meilleures écoles d'ingénieur françaises, et mondialement reconnue avec l'Université Paris-Saclay. Chaque année, près de 1000 étudiants en ressortent diplômés ingénieurs et rejoignent alors le monde du travail. Nous sponsoriser vous assure le contact d'un vivier de talents sans pareil en France. "
            />
            <p className='regular-text navy' style={{ marginLeft: '5%', marginRight: '5%' }}>Vous êtes une entreprise ou un particulier qui souhaite sponsoriser les projets aérospatiaux de l'association ? Nous proposons plusieurs offres en contrepartie de votre soutien. Découvrez ci dessous notre <strong>plaquette Entreprise !</strong></p>
            {/*<div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column', textAlign: 'center', marginTop:'2rem',marginLeft: '5%', marginRight: '5%', width:'90%' }}>
                <Document file={PlaquettePoleEspace} onLoadSuccess={handleDocumentLoadSuccess}>
                    <Slideshow content={pdfPages(maxPageNumber)}/>
                </Document>
    </div> jamais réussi à faire fct le pdf bien*/}
            <div style={{ marginTop: '2rem', marginBottom: '2rem', display: 'flex', justifyContent: 'center', gap:'2rem' }}>
                <button className='alt-buttons' onClick={handleDownload}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src='/layout_images/other/donwload_icon.png' alt='Download icon' style={{ width: '2.1rem', height: 'auto', marginRight: '0.5rem', filter:'invert(1)'}} />
                        <span style={{ marginLeft: '0.5rem', fontSize: '1.2rem', marginRight: '0.5rem' }}>Plaquette Entreprise</span>
                    </div>
                </button>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a className='alt-buttons' href='/Partenaires'>
                        <span style={{ marginLeft: '0.5rem', fontSize: '1.2rem', marginRight: '0.5rem' }}>Ils nous soutiennent déjà</span>
                    </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a className='alt-buttons' href='/Contact'>
                        <span style={{ marginLeft: '0.5rem', fontSize: '1.2rem', marginRight: '0.5rem' }}>Nous contacter</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PageComponent;
