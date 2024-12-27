import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  
return (
    //De esta manera usa el fragment para abreviar pero no afecta en nada
    <section className='App'>
         <TwitterFollowCard isfollowing 
                            usernane="hugor">
           Hugo Alejandro
         </TwitterFollowCard>
         <TwitterFollowCard isfollowing={false} 
                            usernane="joaquinr">
            Joaquin chavez
        </TwitterFollowCard>
    </section>
   
)

}