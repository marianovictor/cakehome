import  React from 'react';
import Carroseul, { CarouselItem }from '../../components/carroseulPhotos/carrouseul';
import foto1 from '../../assets/testeFoto.jpg';
import './photos.css';

export default function Photos() {
    return(
        <div className="container">
            <div className="titlePag"><h1>Fotos</h1></div>
            <div className="genericContainer">
                <div className="titleGeneric">
                    <h2>Bolos</h2>
                    <div className="cards">
                        <div className="cardGeneric">
                            <div className="title">Testeee</div>
                            <div className="foto"><img src={foto1} alt="foto"/></div>
                            <div className="description"><p>Incididunt eu dolore excepteur commodo cupidatat reprehenderit deserunt consequat voluptate nisi dolore do.</p></div>
                        </div>
                        <div className="cardGeneric">
                            <div className="title">Testeee</div>
                            <div className="foto"><img src={foto1} alt="foto"/></div>
                            <div className="description"><p>Incididunt eu dolore excepteur commodo cupidatat reprehenderit deserunt consequat voluptate nisi dolore do.</p></div>
                        </div>
                        <div className="cardGeneric">
                            <div className="title">Testeee</div>
                            <div className="foto"><img src={foto1} alt="foto"/></div>
                            <div className="description"><p>Incididunt eu dolore excepteur commodo cupidatat reprehenderit deserunt consequat voluptate nisi dolore do.</p></div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="cardGeneric">
                            <div className="title">Testeee</div>
                            <div className="foto"><img src={foto1} alt="foto"/></div>
                            <div className="description"><p>Incididunt eu dolore excepteur commodo cupidatat reprehenderit deserunt consequat voluptate nisi dolore do.</p></div>
                        </div>
                        <div className="cardGeneric">
                            <div className="title">Testeee</div>
                            <div className="foto"><img src={foto1} alt="foto"/></div>
                            <div className="description"><p>Incididunt eu dolore excepteur commodo cupidatat reprehenderit deserunt consequat voluptate nisi dolore do.</p></div>
                        </div>
                        <div className="cardGeneric">
                            <div className="title">Testeee</div>
                            <div className="foto"><img src={foto1} alt="foto"/></div>
                            <div className="description"><p>Incididunt eu dolore excepteur commodo cupidatat reprehenderit deserunt consequat voluptate nisi dolore do.</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

