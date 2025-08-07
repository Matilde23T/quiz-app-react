
import './startscreen.css';



export default function DisplayElement({onStart}){

    
    return(
        <>
        <div className="main-start">
            <div className="section-start">
        <h1 className='intro-title'>Quanto ne sai di musica?</h1>
        <h3 className='sub-title'>Mettiti alla prova con 20 domande che spaziano tra i vari generi Musicali!</h3>
        <div className="btn-container">
        <button onClick={onStart} className='btn-start'> Inizia quiz</button>
        </div>
        </div>
        
        </div>


 <footer className="footer-section">
<p>© Copyright Matilde Tiengo 2025  
  <a href="https://github.com/Matilde23T" className="icons">
    <i className="fa-brands fa-github fa-lg"></i>
    </a>    </p>   
</footer>

       
        </>
    )
}




