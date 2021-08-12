import { tsParticles } from 'tsparticles';
const config = {
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: ['connect', 'slow'],
      },
      onClick: {
        enable: true,
        mode: 'repulse',
      },
    },
    mode: {
      connect: {
        distance: 200,
        radius: 10,
        links: {
          opacity: 0.65,
        },
      },
      slow: {
        factor: 3,
        radius: 10,
      },
    },
  },
  particles: {
    move: {
      enable: true,
    },
    color: {
      value: ['#ff79c6', '#8be9fd'],
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.5,
      },
      value: {
        min: 0.5,
        max: 1,
      },
    },
    size: {
      random: {
        enable: true,
        minimumValue: 1,
      },
      value: {
        min: 1,
        max: 8,
      },
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 900,
      },
    },
  },
};

export default tsParticles.load('tsparticles', config);
