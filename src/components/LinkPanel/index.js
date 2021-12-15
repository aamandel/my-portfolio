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
                        <li key={category.title}>
                            <a href='/' className='mx-3' id={category.title}>
                                <h1>{category.title}</h1>
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