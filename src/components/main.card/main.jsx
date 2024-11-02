import style from '../main.card/main.module.css'
import icon from '../main.card/img/icon.png'
export const Main = () =>{


    return(
        <>
            <section className={style.main} >
                <div className='container' >
                    <dic className={style.main__block} >
                        <div className={style.main__open} >
                           <div className={style.main__dod} >
                              <img src={icon} alt="img"/>  
                           </div>
                           <div className={style.main__flex} >
                               <h2 className={style.maun__title} >Тезкор етказиш</h2>
                               <p className={style.main__text} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                           </div>
                        </div>
                        <div className={style.main__open} >
                           <div className={style.main__dod} >
                              <img src={icon} alt="img"/>  
                           </div>
                           <div className={style.main__flex} >
                               <h2 className={style.maun__title} >Тўлов химояси</h2>
                               <p className={style.main__text} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                           </div>
                        </div>
                        <div className={style.main__open} >
                           <div className={style.main__dod} >
                              <img src={icon} alt="img"/>  
                           </div>
                           <div className={style.main__flex} >
                               <h2 className={style.maun__title} >Юқори сифат</h2>
                               <p className={style.main__text} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                           </div>
                        </div>
                        <div className={style.main__open} >
                           <div className={style.main__dod} >
                              <img src={icon} alt="img"/>  
                           </div>
                           <div className={style.main__flex} >
                               <h2 className={style.maun__title} >Энг сара китоблар</h2>
                               <p className={style.main__text} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                           </div>
                        </div>
                    </dic>
                </div>
            </section>
        </>
    );
};