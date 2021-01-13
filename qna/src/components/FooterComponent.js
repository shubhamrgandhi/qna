import React from 'react';
import { VscGithub } from 'react-icons/vsc';

function Footer(){
    return(
        <div className = 'footer' >
            <div className='container'>
                
                <div className = 'row justify-content-center'>
                    <p><VscGithub size = '2em' style = {{verticalAlign: 'middle'}} />
                    <a href = "https://github.com/shubhamrgandhi/qna">  GitHub Repo </a></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;