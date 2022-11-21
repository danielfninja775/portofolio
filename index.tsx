import styles from '../styles/Home.module.scss'
import Link from 'next/link'

import Head from 'next/head';
import { 
  AiOutlineAndroid,
  AiOutlineApple,
  AiOutlineDesktop,
  AiOutlineShoppingCart ,
  AiOutlineLaptop,
  AiOutlineLinkedin,
  AiOutlineGithub,
  BsWhatsapp, 
  AiOutlineWhatsApp,
  MdOutlineEAiOutlineMailmail,
  AiOutlineMail
} from 'react-icons/ai';

export default function HomePage() {
  return(
    <> 

   <main className={styles.mainn}>
    
<img src="/Background5.jpg"  style={{marginTop:"1px"}}/>
         
 <div className=  { styles.headline } >
             <a>Developing Front-end is where I find myself at this time 
               coding in<br/>  HTML, CSS, React-Native, ReactJS,
          <br/>typescript, Git, GitHub, Node Js, Javascript<br/> and more to come.</a>
          </div>
 

                <div className= { styles.services }>
                      <h1>Services</h1>
               </div>
      
        <article className= { styles.iconsAndroid }>
                 <AiOutlineAndroid color='#dcd8c6' size={55} />
                 <AiOutlineApple color='#dcd8c6' size={55}/>
                 <AiOutlineDesktop color='#dcd8c6' size={60}
                  style={{marginLeft:'350px'}} />
        </article>


       <div className= { styles.servicesTypes }>
          <a><strong> Aplication developer </strong>  <br/> Developing Aplications for<br/> Android and IOS (Iphone)</a>
          <a><strong> Website developer </strong> <br/> Developing with HTML,<br/> CSS and  Javascript</a>
       </div>


  <article className={ styles.icons }>
      <AiOutlineShoppingCart color='#dcd8c6' size={60}/>
      <AiOutlineLaptop color='#dcd8c6'size={70} style={{marginLeft:'390px'}}/>
  </article>

      <div className={ styles.servicesTypes }>  
        <a><strong>Ecommerce  </strong>
         <br/> Make your Online Store</a>
         <a> <strong>Front-End Developer
         </strong> <br/>HTML, CSS, Javascrip, React-Native and ReactJS  </a>

      </div>

<div className={styles.divisoria}> </div>



<div className= { styles.services }>
                      <h1>Projects</h1>
               </div>
      
  <div className= { styles.ProjectPics }>
    <img src="/pizza44.png"   className={styles.img4}/>
    <img src="/pizza33.png"   className={styles.img2}/>
    <img src="/pizza22.png"   className={styles.img3}/>
    <img src="/pizza11.png"  className={styles.img1} />
   
  </div>

            <div className={styles.divisoria}>  
            <a>Send Orders directly to the chef</a>
            </div>
           
        <div className={ styles.ProjectPics1 }>
 
            <img src="/cash66.png" width={300} height={300}  className={styles.img4}/>
           <img src="/cash55.png" width={400} height={300}  className={styles.img2}/>
          <img src="/cash77.png" width={400} height={300}  className={styles.img3}/>
          <img src="/cash88.png" width={400} height={300} className={styles.img1} />
       </div>


            <div className={styles.divisoria}> 
         <a>Take notes of your cash </a> 
            </div>


       <div className= { styles.ProjectPics1 }>
   <img src="/webpizza55.png" style={{marginLeft:"280px",marginTop:"-300px",
   marginBottom:"-60px"}}/>
   </div>
   
  

  <div className= { styles.divisoria }>
  <a style={{marginTop:"100px"}}> 
  Manage your products  on WebPizza backend </a>
  </div>
            </main>

            <footer className= { styles.footer }> 
            
        
             <a href="https://www.linkedin.com/in/daniel-ferreira-6bb856197/">
                <br/>  <AiOutlineLinkedin color='#dcd8c6' size={30}/> <br/> LinkedIn  </a>

            <a href="https://github.com/danielfninja775"> 
                <AiOutlineGithub color='#dcd8c6' size={30}/><br/>GitHub </a>
              
              <a>  <AiOutlineMail color='#dcd8c6' size={30}/> <br/>
               Danielf775@gmail.com </a> <br/>
              <a> <AiOutlineWhatsApp color='#dcd8c6' size={30}/><br/> +31 687 687107  </a>
             </footer>



             
    </>
 ) 
}


