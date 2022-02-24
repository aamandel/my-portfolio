import React from 'react';
import LinkPanel from '../LinkPanel';

const ProjectsPanel = (props) => {
    const { setPageState } = props
    const projects = [
        {
            title: 'Multithreaded HTTP Server',
            graphicPath: "/assets/graphics/HTTP Server Graphic.png"
        },
        {
            title: 'Pacman AI Contest',
            graphicPath: "/assets/graphics/Pacman Graphic.png",
        },
        {
            title: 'Rate My Surf',
            graphicPath: "/assets/graphics/Rate My Surf.png"
        }
    ];

    return (
        <section>
            <LinkPanel
                categories={projects}
                setPageState={setPageState}
            ></LinkPanel>
        </section>
    );
}

export default ProjectsPanel;