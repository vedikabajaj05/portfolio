// import { useEffect, useState } from "react";

// // star is the list of object contianing thes properties :
// // id, size, x, y, opacity, animationDuration
// //similar for meteor: id, x, y, delay, animationDuration

// export const StarBackground = () => {
//     const [stars, setStars] = useState([]);
//     const [meteors, setMeteors] = useState([]);

//     useEffect(()=>{
//         generateStars();
//         generateMeteors();
//         const handleResize=()=>{
//             generateStars();
//         };
//         window.addEventListener('resize',handleResize)
//         return () => window.removeEventListener("resize", handleResize);
//     },[]);

//     const generateStars = () => {
//         const numberOfStars = Math.floor(
//             (window.innerWidth * window.innerHeight) / 10000
//         );
//         const newStars = []

//         for(let i = 0; i < numberOfStars; i++){
//             newStars.push({
//                 id:i,
//                 size: Math.random()*3 + 1,
//                 x:Math.random()*100, //placing it in any position between 0 to 100%
//                 y:Math.random()*100,
//                 opacity: Math.random()*0.5 + 0.5, //opacity is between 50 to 100 so that some look dull and some look opaque
//                 animationDuration: Math.random()* 4 + 2, //pulsating fast or slow
//             });
//         }
//         setStars(newStars);
//     };

//     const generateMeteors = () => {
//         const numberOfMeteors = 4;
//         const newMeteors = [];

//         for(let i = 0; i < numberOfMeteors; i++){
//             newMeteors.push({
//                 id:i,
//                 size: Math.random()*2 + 1,
//                 x:Math.random()*100, //placing it in any position between 0 to 100%
//                 y:Math.random()*20,
//                 delay: Math.random()*15,
//                 animationDuration: Math.random()* 4 + 2, //pulsating fast or slow
//             });
//         }
//         setMeteors(newMeteors);
//     };

//     return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//         {stars.map((stars)=>(
//             <div key = {stars.id} className="star animate-pulse-subtle" style={{
//                 width: stars.size + "px",
//                 height: stars.size + "px",
//                 left: stars.x + "%",
//                 top: stars.y + "%",
//                 opacity: stars.opacity,
//                 animationDuration:stars.animationDuration + "s",
//             }} />
//         ))}
//         {meteors.map((meteor)=>(
//             <div key = {meteor.id} className="meteor animate-meteor" style={{
//                 width: meteor.size*15+ "px",
//                 height: meteor.size+ "px",
//                 left: meteor.x + "%",
//                 top: meteor.y + "%",
//                 animationDelay: meteor.delay,
//                 animationDuration:meteor.animationDuration + "s",
//             }} />
//         ))}
//     </div>;
// }
import { useEffect, useState } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [isDark, setIsDark] = useState(
        document.documentElement.classList.contains("dark")
    );

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains("dark"));
        });
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        generateStars();
        generateMeteors();
        const handleResize = () => {
            generateStars();
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 4;
        const newMeteors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setMeteors(newMeteors);
    };

    // ── LIGHT MODE: mountain scenery ──
    if (!isDark) {
        return (
            <div
                className="fixed inset-0 overflow-hidden pointer-events-none z-0"
                style={{
                    backgroundImage: "url('/purple-mountains.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.35,
                }}
            />
        );
    }

    // ── DARK MODE: original stars + meteors ──
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((stars) => (
                <div
                    key={stars.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: stars.size + "px",
                        height: stars.size + "px",
                        left: stars.x + "%",
                        top: stars.y + "%",
                        opacity: stars.opacity,
                        animationDuration: stars.animationDuration + "s",
                    }}
                />
            ))}
            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteor.size * 15 + "px",
                        height: meteor.size + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );
};