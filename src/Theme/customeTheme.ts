import { createTheme } from "@mui/material";
import { mainSheet } from "styled-components/dist/models/StyleSheetManager";

const customeTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main:"#00927c"
        },
        secondary: {
            main:"#EAF0F1"
        }
    },
})

export default customeTheme;