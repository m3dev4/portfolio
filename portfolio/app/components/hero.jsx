"use client"
import React, { useState, useEffect } from 'react';
import Typical from 'react-typical';
import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';
import Horlonge from './horlonge';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const springProps = useSpring({
    to: {
      transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
    },
    config: { mass: 1, tension: 170, friction: 26 }
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex items-center justify-center h-screen w-full bg-custom-bg relative overflow-x-hidden">
      <Horlonge />
      <div className='z-50'>
        <h1 className="text-[90px] font-semibold text-white roboto-bold">Hi👋🏾, I'm Mouhamed Lo</h1>
        <span className="text-white font-extrabold text-[45px]">
          I'm a
          <Typical
            steps={[" creative Developer", 2000, " data analysis📊", 2000]}
            loop={Infinity}
            wrapper="span"
            className="text-yellow-300 text-[45px]"
          /> based in Dakar
        </span>
      </div>
      <animated.div
        className='absolute left-0 w-full'
        style={springProps}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

        <Image
          src="/images/code.png"
          alt='logo'
          width={100}
          height={100}
          className='image-float object-cover mb-[100px] pl-5'
        />
        <Image
          src="/images/settings.png"
          alt='logo'
          width={100}
          height={100}
          className='image-float right-20 ml-[-10px] absolute object-cover'
        />

      </animated.div>
    </div>
  );
}

export default Hero;
