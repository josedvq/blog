import React from 'react'
import {Paper} from './paper'

export interface Project {
    img?: string
    title: string
    description: React.ReactNode
    codeLink?: string | null
    liveLink?: string | null
    tags?: ['software' | 'research']
    techstack?: Array<string>
    papers?: Paper[]
  }