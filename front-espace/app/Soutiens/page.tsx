import Paragraph from "../tools/text_display/Paragraph";

const CNEStext = 'Le CNES est le Centre National des études Spatiales. Le CNES, en collaboration avec l\'association planète sciences,'
const PlaneteSciencesText = 'Planète Sciences est une association qui a pour but de promouvoir les sciences et les techniques auprès des jeunes. Elle est composée de 12 délégations régionales, dont une en Île-de-France. L\'association organise de nombreux évènements, dont le C\'Space, un rassemblement de fusées expérimentales.'

const Page = () => { 
    return (
        <div>
            <Paragraph 
                image='../../soutiens/centralesupelec.png' 
                imagePosition='right' 
                imageWidth={400}
                title='Soutiens' 
                text={CNEStext} 
            />
            <Paragraph 
                image='../../soutiens/cnes.png' 
                imagePosition='left'
                imageWidth={400}
                title='Soutiens' 
                text={CNEStext} 
            />
        </div>
    );
};

export default Page;