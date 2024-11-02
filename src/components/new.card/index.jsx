import style from "../new.card/index.module.css"
import photo  from '../new.card/img/photo.png'
import photo2  from '../new.card/img/photo2.png'
import photo3 from '../new.card/img/photo3.png'
import photo4 from '../new.card/img/photo4.png'
import photo5 from '../new.card/img/photo5.png'
import photo6 from '../new.card/img/photo6.png'

export const Index = () =>{
    return(
        <>
            <section className={style.wrap} >
                <div className="container">
                <h2 className={style.wrap__item} >Рукнлар</h2>
                    <div className={style.wrap__block} >
                        <div className={style.wrap__open} >
                            <img src={photo} alt=""/>
                            <h3 className={style.wrap__title}>Жахон адабиёти</h3>
                        </div>
                        <div className={style.wrap__open} >
                            <img src={photo2} alt=""/>
                           
                        </div>
                        <div className={style.wrap__open} >
                            <img src={photo3} alt=""/>
                           
                        </div>
                        <div className={style.wrap__open} >
                            <img src={photo4} alt=""/>
                           
                        </div>
                        <div className={style.wrap__open} >
                            <img src={photo5} alt=""/>
                            
                        </div>
                        <div className={style.wrap__open} >
                            <img src={photo6} alt=""/>
                           
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}