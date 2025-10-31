import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MorphSVGPlugin } from './MorphSVGPlugin'
import { DrawSVGPlugin } from './DrawSVGPlugin'

// Register plugins
gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin, DrawSVGPlugin)

// Tree-shakable exports
export { gsap, ScrollTrigger, MorphSVGPlugin, DrawSVGPlugin }
export { useGSAP } from '@gsap/react'
