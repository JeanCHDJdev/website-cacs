"use client";
import React from 'react';
import { useState}  from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const PlaquettePoleEspace = '/pdfs/Devenir-Partenaire/PlaquettePoleEspace.pdf';

const page: React.FC = () => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
  
    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
      setNumPages(numPages);
    }
    const handleDownload = () => {
        window.open(PlaquettePoleEspace, '_blank');
    };
    return (
          
        <div>
            <div style={{ position: 'relative', zIndex: '1', height: '55rem' }}>
                <img src="/contact/bg_contact.jpg" style={{ objectFit: 'cover', objectPosition: 'center', height: '51rem', filter: 'brightness(72%)', width:'100%' }} />
                <text className='title-text huge white' style={{ textAlign: 'center', zIndex: '5', position: 'absolute', left: '10rem', top: '41rem'}}>Devenir partenaire</text>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column', textAlign: 'center' }}>
                <text className='title-text navy' style={{textAlign:'center', display:'flex', justifyContent:'center', marginBottom:'4rem'}}>Être partenaire de l'association</text>
                <p className='title-text tiny navy' style={{ marginLeft: '30rem', marginRight: '30rem', marginBottom:'4rem' }}>Nos fusées volent grâce à la générosité de nos sponsors.</p>
                <p className='regular-text tiny navy' style={{ marginLeft: '30rem', marginRight: '30rem' }}>Vous êtes une entreprise ou un particulier qui souhaite sponsoriser les projets aérospatiaux de l'association ? Nous proposons plusieurs offres en contrepartie de votre soutien.</p>
                <div style={{width:"0rem"}}>
                    <Document file={PlaquettePoleEspace}>
                        <Page pageNumber={pageNumber} />
                    </Document>
                </div>
            </div>
            <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
                <p className='regular-text tiny navy' style={{ alignItems: 'column', marginLeft: '30rem', marginRight: '30rem' }}>Vous souhaitez découvrir plus de notre projet et de cette aventure ? Découvrez notre dossier post-vol, qui entre en détails dans nos choix techniques, notre organisation et les problèmes rencontrés dans le projet.</p>
            </div>
            <div style={{ marginTop: '2rem', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                <button className='alt-buttons' onClick={handleDownload}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src='/layout_images/other/donwload_icon.png' alt='Download icon' style={{ width: '2.1rem', height: 'auto', marginRight: '0.5rem' }} />
                        <span style={{ marginLeft: '0.5rem', fontSize: '1.2rem', marginRight: '0.5rem' }}>Dossier Post-Vol</span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default page;
