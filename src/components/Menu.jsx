import { data } from '../restAPI.json';

const Menu = () => {
    return (
        <section className="menu" id="menu">
            <div className="container">
                <div className="heading_section">
                    <h1 className="heading">Galeria</h1>
                    <p>Todas mis obras</p>
                </div>

                <div className="dishes_container">
                    {data[0].dishes.map((element) => {
                        return (
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h1>{element.title}</h1>
                                <button>{element.category}</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Menu