import React from 'react';

interface Props {
    video: string;
    images: string[];
    texts: string[];
    pdfs: string[];
    statistics: number[];
}

const TemplatePageFusEx: React.FC<Props> = ({ video, images, texts, pdfs, statistics }) => {
    return (
        <div>
            <video src={video} controls />
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} />
            ))}
            {texts.map((text, index) => (
                <p key={index}>{text}</p>
            ))}
            {pdfs.map((pdf, index) => (
                <a key={index} href={pdf} target="_blank" rel="noopener noreferrer">
                    PDF {index + 1}
                </a>
            ))}
            {statistics.map((statistic, index) => (
                <p key={index}>Statistic {index + 1}: {statistic}</p>
            ))}
        </div>
    );
};

export default TemplatePageFusEx;
