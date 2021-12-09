import React from 'react';
import LinkPanel from '../LinkPanel';

const ProjectsPanel = () => {
    const projects = [
        {
            title: 'Multithreaded HTTP Server',
            graphicPath: "assets/graphics/HTTP Server Graphic.png"
        },
        {
            title: 'Pacman AI Contest',
            graphicPath: "assets/graphics/Pacman Graphic.png"
        },
        {
            title: 'Perlin Noise Terrain Generator',
            graphicPath: "assets/graphics/Perlin Terrain Graphic.png"
        }
    ];

    return (
        <section>
            <LinkPanel
                categories={projects}
            ></LinkPanel>
        </section>
    );
}

export default ProjectsPanel;