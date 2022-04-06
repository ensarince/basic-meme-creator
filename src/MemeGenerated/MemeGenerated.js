import React from "react";
import styles from "./styles.module.css"
import { useNavigate, useLocation } from "react-router-dom";
import { useClipboard } from "use-clipboard-copy";
import { useState } from "react";

export const MemeGenerated = () => {

    const [copied, setCopied] = useState(false); 

    const navigate = useNavigate();
    const location = useLocation();
    const url = new URLSearchParams(location.search).get('url');
    const clipboard = useClipboard();


    const copyLink = () =>{
        clipboard.copy(url);
        setCopied(true);
    }

    return (
        <div className={styles.container}>
            <button onClick={() => navigate('/')} className={styles.home}>
                More Memes
            </button> 
            { url && <img src={url} />}
            <button onClick={copyLink} className={styles.copy}>
                {copied ? 'Link copied!' : 'Copy Link'}
            </button>
        </div>
    
    );
};