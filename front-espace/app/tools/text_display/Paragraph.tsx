import React from 'react';

type ParagraphProps = {
    title?: string;
    image: string;
    imagePosition: 'left' | 'right';
    imageWidth: number;
    imageHeight?: 'auto' | number;
    text: string;
};

const Paragraph: React.FC<ParagraphProps> = ({
    title,
    image,
    imagePosition,
    imageWidth,
    imageHeight = 'auto',
    text,
}) => {
    return (
        <div className="paragraph-container" style={{ margin: '20px', padding: '20px' }}>
            {title && (
                <div className="paragraph-title">
                    {title}
                </div>
            )}
            <div className="paragraph-content" style={{ display: 'flex', alignItems: 'center' }}>
                {imagePosition === 'left' && (
                    <>
                        <img src={image} alt="Paragraph Image" style={{ width: imageWidth, height: imageHeight, marginRight: '20px' }} />
                        <div className="paragraph-text" style={{ marginLeft: '50px' }}>{text}</div>
                    </>
                )}
                {imagePosition === 'right' && (
                    <>
                        <div className="paragraph-text" style={{ marginRight: '50px' }}>{text}</div>
                        <img src={image} alt="Paragraph Image" style={{ width: imageWidth, height: imageHeight, marginLeft: '20px' }} />
                    </>
                )}
            </div>
        </div>
    );
};

export default Paragraph;
