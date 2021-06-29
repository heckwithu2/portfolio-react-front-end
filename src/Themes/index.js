import {createMuiTheme} from "@material-ui/core";

export const globalSpacing = 15;
export const globalBorderRadius = 2;
export const globalLoadingProgress = 100;

export const white = "#ffffff";
export const black = "#000000";
const superDarkGrey = "#212121";
const superDarkLightGrey = "#757575"; 
const darkerGrey = "#252525";
const darkGrey = "#353535";
const orange = '#ffc400';
const lightestGrey = "#fafafa";
const lightGrey = "#f5f5f5";
const grey = "#9e9e9e";

const lightBlue = "#6573c3";
const blue = '#3f51b5';
const darkBlue = "#2c387e";
const lightGreen = "#388e3c";
const green = "#2e7d32";
const darkGreen = "#1b5e20";
const lightRed = "#ef5350";
const red = "#f44336";
const darkRed = "#b71c1c";


export const lightTheme = createMuiTheme({
    
    typography: {
        fontFamily: `JetBrains Mono , monospace`,
    },


    palette: {
        background: {
            default: white,
            shadow: lightGrey,
        },
        primary: {
            light:  lightestGrey,
            main:  lightGrey,
            dark: grey,
            darkest: superDarkLightGrey,
        },
        secondary: {
            light: grey,
            main: darkGrey,
            dark: darkerGrey,
        },
    },
    
    categories : {
        blue: {
            light: lightBlue,
            main: blue,
            dark: darkBlue,
        },
    
        green: {
            light: lightGreen,
            main: green,
            dark: darkGreen,
        },
    
        red: {
            light: lightRed,
            main: red,
            dark: darkRed,
        },
    },


    button: {
        delete: red,
        edit: orange,
        add: blue,
    },
    text: {
        primary: black,
        secondary: white,
    }
});

export const darkTheme = createMuiTheme({
    typography: {
        fontFamily: `JetBrains Mono , monospace`,
    },
    
    palette: {
        background: {
            default: darkGrey,
            shadow: darkerGrey,
        },
        primary: {
            light: grey,
            main: darkGrey,
            dark: darkerGrey,
            darkest: superDarkGrey,
        },
        secondary: {
            light:  lightestGrey,
            main:  lightGrey,
            dark: grey,
        },
    },
    
    categories : {
        blue: {
            light: lightBlue,
            main: blue,
            dark: darkBlue,
        },
    
        green: {
            light: lightGreen,
            main: green,
            dark: darkGreen,
        },
    
        red: {
            light: lightRed,
            main: red,
            dark: darkRed,
        },
    },


    button: {
        delete: red,
        edit: orange,
        add: blue,
    },
    text: {
        primary: white,
        secondary: black,
    }
});