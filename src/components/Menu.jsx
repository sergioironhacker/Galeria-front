import  { useState } from 'react';
import { data } from '../restAPI.json';


const Menu = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(currentIndex === data[0].dishes.length - 1 ? 0 : currentIndex + 1);
    };

    const handlePrev = () => {
        setCurrentIndex(currentIndex === 0 ? data[0].dishes.length - 1 : currentIndex - 1);
    };

    return (
        <section className="menu" id="menu">
            <div className="container">
                <div className="heading_section">
                    <h1 className="heading">Galería</h1>
                    <p>Todas mis obras</p>
                </div>

                <div className="carousel">
                    <div className="image-container">
                        <img
                            src={data[0].dishes[currentIndex].image}
                            alt={data[0].dishes[currentIndex].title}
                        />
                    </div>
                    <button className="nav-btn prev" onClick={handlePrev}>
                        &#9664; {/* Icono de flecha hacia la izquierda */}
                    </button>
                    <button className="nav-btn next" onClick={handleNext}>
                        &#9654; {/* Icono de flecha hacia la derecha */}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Menu;
