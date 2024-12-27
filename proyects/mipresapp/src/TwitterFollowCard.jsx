import React from "react";

export function TwitterFollowCard({ children, usernane, isfollowing}){

   
    const imgSrc = `https://unavatar.io/${usernane}`;
    const text = isfollowing ? 'Siguiendo' : 'Seguir';
    const ButtonClasseName = isfollowing ?
                             'tw-followCard-button is-following'
                             :'tw-followCard-button';
    return (

     //Diseño del card de seguir de twitter
    //Se usar classname cuand se quiere un identificado al control
    //no usar id ya que se trata de que sea reutilizable el componente
    
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' 
                    alt="El avatar del midudev"
                    src={imgSrc}></img>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-info.Username'>@{usernane}</span>
                </div>
            </header>
        
            <aside>
                <button className={ButtonClasseName}>{text}</button>
            </aside>
        </article>
    
   )
}