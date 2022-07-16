import React, { useRef, useState } from 'react';
import QRCode from 'qrcode'; 

const GenerateQrcode = () => {

    const [text, setText] = useState<string>('');
    const [imageUrl, setImageUrl] = useState('');

    const generateQrCode = async () => {
        try {
            const response = await QRCode.toDataURL(text);
            setImageUrl(response);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <input type={'text'} onChange={(e) => setText(e.target.value)} placeholder='enter text' />
            <button onClick={() => generateQrCode()}>Generate</button>
            <div>
                {imageUrl ? (
                    <a href={imageUrl} download>
                        <img src={imageUrl} alt="img" />
                    </a>) : null}
            </div>
        </div>
    );
};

export default GenerateQrcode;