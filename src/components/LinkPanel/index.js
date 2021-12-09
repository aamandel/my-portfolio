import React from 'react';

const LinkPanel = (props) => {
    const {
        categories = []
    } = props;

    return (
        <section>
            <div className='link-panel'>
                <h3 className='mx-1' id="about">Projects</h3>
                <ul className='flex-row'>

                    {categories.map((category) => (
                        <li>
                            <a href='/' className='mx-3' id={category.title}>
                                {category.title}
                                <img
                                    src={require(`../../${category.graphicPath}`).default}
                                    className='img-thumbnail'
                                    alt={category.title}
                                />
                            </a>

                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default LinkPanel;