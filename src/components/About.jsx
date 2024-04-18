import { useState } from 'react';

function About() {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <section className="about" id="about">
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">Acerca de</h1>
                        <p>Luciano Esteban De Andrés</p>
                    </div>
                    <p className="mid">
                        Luciano Esteban nacido en Segovia en 1964,  es uno de esos hombres hechos a sí mismos, que no nacieron ni crecieron rodeados de cuadros y de libros,
                        que ha tenido que remontar más y mayores obstáculos que la inmensa mayoría y que, al mismo tiempo, ha ido construyendo su personalidad de pintor a base de humildad,
                        de esfuerzo, de dudas, de vigilias. Tal vez por esa razón siempre me ha interesado su trabajo y no me ha sido difícil identificarme con su lucha,
                        que no es la lucha de quien tiene que defender una posición, sino la de quien, desde fuera, tiene que conquistar una fortaleza fuertemente defendida,
                        sin contar con demasiados apoyos.
                        {showMore ? (
                            <>
                                Si cuando contaba doce años ya empezó a asistir a las clases de la escuela de Arte Casa de los Picos de Segovia,
                                su dedicación artística ha tenido que ser siempre a tiempo parcial, alternando esta actividad con otro tipo de trabajo.
                                Tal vez ésa sea la causa de su obsesiva preocupación por la formación, acudiendo a cuantos cursos y talleres ha tenido la posibilidad de asistir.
                                Así estuvo formándose durante cinco años en los talleres de pintura, dibujo y escultura de la Junta de Castilla y León. Acudió durante ocho años
                                al taller de la pintora Alicia Urda, completándolo con talleres de cerámica y de pintura al fresco y mural. Durante muchos años acudió al Círculo de
                                Bellas Artes de Madrid a sus clases de dibujo y pintura y tratamiento del cuerpo humano con desnudo de modelos al natural. También se formó en los cursos
                                del Canal de Isabel II y Casa de América y en otros dirigidos por artistas de la talla de Antonio López, Julio López Hernández, Pedro Mora, Alfonso Albacete e
                                Isidoro Valcárcel Medina. Su interés por la teoría le ha llevado a participar en debates como "Leyenda y realidad sobre las vanguardias artísticas" y "Jornadas sobre la imagen" o a compartir
                                una mesa redonda con Antoni Tàpies.
                                También se ha formado en la escultura, tanto en barro y en piedra como en hierro y ha hecho ensamblajes en hierro a partir de objetos encontrados.
                                Significativas son sus piezas de ciudades, animales y cuerpos humanos. Su sensibilidad a la hora de escribir e ilustrar libros infantiles ha quedado demostrada en la publicación "Voces del bosque", un libro muy especial de Ediciones Fuente de la Fama y los publicados en la editorial Segundo Santos de Cuenca.
                            </>
                        ) : null}
                    </p>
                    {!showMore && (
                        <button className="show-more-button" onClick={toggleShowMore}>
                            Leer más
                        </button>
                    )}
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>
            </div>
        </section>
    );
}

export default About;
