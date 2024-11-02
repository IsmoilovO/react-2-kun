import style from '../hero.card/hero.module.css'
import hero from "../hero.card/img/hero.svg"
import stet from "../hero.card/img/stet.png"
import good from "../hero.card/img/good.png"
import rich from '../hero.card/img/rich.png'
import render from "../hero.card/img/render.svg"


export const Hero = () => {

    return(
        <>
            <section className={style.hero} >
                <div className="container" >
                    <div className={style.hero__clock} >
                        <div className={style.hero__open} >
                            <div className={style.hero__img__sap} >
                                 <h2 className={style.hero__title} >Кўп ўқилаётганлар</h2>
                                <img src={hero} alt="omg"/>
                            </div>
                            <div className={style.hero__img} >
                                <img src={stet} alt="omg"/>
                                 <h2 className={style.hero__title} >1984</h2>
                            </div>
                            <div className={style.hero__img} >
                                <img src={good} alt="omg"/>
                                 <h2 className={style.hero__title} >Code 8</h2>
                            </div>
                            <div className={style.hero__img} >
                                <img src={rich} alt="omg"/>
                                 <h2 className={style.hero__title} >Rich dad poor dad</h2>
                            </div>
                        </div>
                        <div className={style.hero__reed} >
                            <h2 className={style.hero__title__sap}>Китоб ўқишни ёқтирасизми?</h2>
                            <p className={style.hero__list}>Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг</p>
                            <div className={style.hero__wrap} >
                                <img src={render} alt="img"/>
                                <button className={style.hero__btn} >Обуна бўлиш</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};