import {  Footer2 , Section } from "./styles";






const Footer  = () => {
    return ( 

        <>
        <Section id="contact">
        <Footer2>
        <div class="waves">
            <div class="wave"  id="wave1"   ></div>
            <div class="wave"  id="wave2"   ></div>
            <div class="wave"  id="wave3"   ></div>
            <div class="wave"  id="wave4"   ></div>
        </div>
        <ul class="social_icon">
            <li>
            <a href="https://www.linkedin.com/in/christian-souzaa/" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-linkedin'></i>
            </a>
                
            </li>
        <li>
        <a href="https://github.com/ChristianSouza12" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-github'></i>
            </a>

        </li>
           <li>
           <a href="https://wa.me/5519982732281
" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-whatsapp'></i>
            </a>

           </li>
           

        </ul>
        
        <p>Todos os direitos reservados.</p>

        </Footer2>
        </Section>
        </>
        
        


     );
}
 
export default Footer ;