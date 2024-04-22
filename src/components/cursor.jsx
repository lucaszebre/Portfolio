import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Cursor({isActive}) {
    const mouse = useRef({ x: 0, y: 0 });
    const circle = useRef();
    const delayedMouse = useRef({ x: 0, y: 0 });
    const rafId = useRef(null);
    const size = isActive ? 400 : 30;

    const colors = [
        "#c32d27",
        "#f5c63f",
        "#457ec4",
        "#356fdb",
    ]


    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;

        mouse.current = {
            x: clientX,
            y: clientY
        };
    };

    const animate = () => {
        const { x, y } = delayedMouse.current;
        delayedMouse.current = {
            x: lerp(x, mouse.current.x, 0.075),
            y: lerp(y, mouse.current.y, 0.075)
        };
        moveCircle(delayedMouse.current.x, delayedMouse.current.y);
        rafId.current = window.requestAnimationFrame(animate);
    };

    const moveCircle = (x, y) => {
        gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
    };

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);
        animate(); 
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            cancelAnimationFrame(rafId.current); 
        };
    }, [isActive]);


    const circles = useRef([]);



const moveCircles = (x, y) => {
    if(circles.current.length < 1) return;
    circles.current.forEach((circle, i) => {
        gsap.set(circle, {x, y, xPercent: -50, yPercent: -50})
    })

}



    return (
        <div className='relative h-full'>
            <div
                ref={circle}
                style={{
                    backgroundColor: "#00ff80",
                    width: size,
                    height: size,
                    filter: `blur(${isActive ? 30 : 0}px)`,
                    transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`


                }}
                className='top-0 left-0 fixed rounded-full mix-blend-difference pointer-events-none' 

            />
        </div>
    );
}

function lerp(a, b, n) {
    return (1 - n) * a + n * b;
}