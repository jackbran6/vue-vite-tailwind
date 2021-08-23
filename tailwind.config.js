module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            yellow: '#ffe08c',
            green: '#42bdac',
            red: '#ef554e',
            'blue-black': '#00283a',
            'dark-green': '#00675e',
            orange: '#f58a1e',
            blue: '#214587',
            purple: '#722c7d',
            black: {
                default: '#000000',
                lighter: '#14141a',
            },
            gray: {
                13: '#2b2b33',
                12: '#46464d',
                11: '#5e5e66',
                10: '#787a80',
                9: ' #909399',
                8: '#abadb3',
                7: '#c4c6cc',
                6: '#dcdee6',
                5: '#e6e7eb',
                4: '#ebecf0',
                3: '#f0f1f5',
                2: '#f5f6fa',
                1: '#fafbff',
            },
        },
        extend: {},
    },
    variants: {
        extend: {},
    },

    corePlugins: {
        outline: false,
    },
}
