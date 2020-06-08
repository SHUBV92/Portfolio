import React from 'react';
import { Parallax, Background } from 'react-parallax';

const MyComponent = () => (
    <div>
        {/* -----basic config-----
        <Parallax
            blur={10}
            bgImage={require('../pics/Courage.jpg')}
            bgImageAlt="the cat"
            strength={200}
        >
            My Name is shubinder and I have recently completed Makers Academy
            <div></div>
            <div style={{ height: '400px' }} />
        </Parallax>
 */}

        -----dynamic blur-----
        <Parallax
            blur={{ min: -50, max: 160 }}
            bgImage={require('../pics/Luffy.jpg')}
            bgImageAlt="the dog"
            strength={-200}
        >
            Blur transition from min to max
            <div style={{ height: '600px' }} />
        </Parallax>

 {/* -----renderProp: "renderLayer"-----*/}
        <Background>
        <Parallax
            bgImage={require('../pics/TheSquad.jpg')}
            strength={400}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'sticky',
                        background: `rgba(255, 125, 0, ${percentage * 1})`,
                        left: '50%',
                        top:  '50%',
                        width: percentage * 1200,
                        height: percentage * 1200
                    }}
                />
            )}
        >
            <p>... Content Shubinder Hain Mera Naam</p>
        </Parallax>

        <Parallax
            blur={{ min: -50, max: 160 }}
            bgImage={require('../pics/Luffy.jpg')}
            bgImageAlt="the dog"
            strength={-200}
        >
            Blur transition from min to max
            <div style={{ height: '600px' }} />
        </Parallax>

        </Background>

    </div>
);
export default MyComponent;