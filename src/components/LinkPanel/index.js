import React from 'react';
import { Link } from 'react-router-dom';

const LinkPanel = (props) => {
    const {
        categories = [],
        setPageState
    } = props;

    return (
        <section>
            <div className='link-panel'>
                <h3 className='mx-1' id="about">Projects</h3>
                <ul className='flex-row'>

                    {categories.map((category) => (
                        <li key={category.title}>
                            <div className='mx-3' id={category.title}
                                onClick={() => {
                                    setPageState(category.title)
                                }}>
                                <Link to={'/Project/' + category.title}>
                                    <h1>{category.title}</h1>
                                    <img
                                        src={process.env.PUBLIC_URL + category.graphicPath}
                                        className='img-thumbnail'
                                        alt={category.title}
                                    />
                                </Link>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default LinkPanel;