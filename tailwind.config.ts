import type { Config } from 'tailwindcss'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration

const colors = {
    'sys-black': '#222727',
    'sys-white': '#F7F9F9',
    'sys-dark-green': '#00A388',
    'sys-green': '#12BFA2',
    'sys-light-green': '#36F5D5',
    'sys-gray': '#C9D3D1',
    'sys-red': '#D80032',
}

export default <Partial<Config>>{
    darkMode: 'class',
    theme: {
        colors,
        backgroundColor: {
            ...colors
        },
    },
    plugins: [],
    content: []
}
