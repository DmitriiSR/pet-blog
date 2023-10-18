import type { Config } from 'tailwindcss'
import {COLORS} from "./constants";
export default <Partial<Config>>{
    darkMode: 'class',
    theme: {
        colors: {...COLORS},
        backgroundColor: {
            ...COLORS
        },
        borderColor: {
            ...COLORS
        }
    },
    plugins: [],
    content: []
}
