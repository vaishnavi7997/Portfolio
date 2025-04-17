const particlesOptions = {
    background: {
      color: {
        value: "#000000", // Black background for contrast
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 90, // Small repulse distance for slower, softer interaction
          duration: 0.5,
        },
      },
    },
    particles: {
      number: {
        value: 90, // Fewer particles with space between them
        density: {
          enable: true,
          area: 500,
        },
      },
      color: {
        value: "#ff69b4", // Pink glowing color
      },
      shape: {
        type: "circle", // Soft glowing orbs
      },
      opacity: {
        value: 0.5, // Soft glowing effect
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.2,
          sync: false,
        },
      },
      size: {
        value: { min: 5, max: 6 }, // Slightly larger particles for a more noticeable effect
        anim: {
          enable: true,
          speed: 1,
          size_min: 2,
          sync: false,
        },
      },
      links: {
        enable: true, // Enable links between particles
        distance: 100, // Links will be created at a small distance
        color: "#ffc0cb", // Light pink color for links
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.5, // Slower movement for particles
        direction: "none", // Free-floating particles
        random: true,
        straight: false,
        outModes: {
          default: "out", // Particles fade out at edges
        },
        attract: {
          enable: true, // Slow attraction to cursor
          rotate: { x: 500, y: 600 },
        },
      },
    },
    detectRetina: true,
  };
  
  export default particlesOptions;
  