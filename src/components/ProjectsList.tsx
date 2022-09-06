import React from 'react';
import { projects } from '../data'
import {Project} from '.'

export const ProjectsList = () => {

    return <>
        {projects.map((props, idx) => (
            <Project key={idx} {...props} />
        ))}
    </>
}