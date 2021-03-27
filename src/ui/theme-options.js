import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const lightTheme = createMuiTheme({
    palette: {
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
        },
        primary: {
            light: '#f5f5f5',
            main: '#424242',
            background: '#f5f5f5',
            text: '#212121',
        },
        secondary: { // form border
            main: '#424242',
        },
        elements: { // post card
            main: "#ffffff",
            secondary: "#e0e0e0",
            text: "#424242",
            secondaryText: "#757575",
        },
        links: {
            visited: "#606e8c",
            hover: "#1560bd",
            main: "#08457e",
        },
        buttons: {
            text: "#f5f5f5",
            hoverText: "#f5f5f5",
            hover: "#757575",
            main: "#424242",
        },
        footer: {
            main: "#ffffff",
            link: "#ffffff"
        }
    }
});

export const darkTheme = createMuiTheme({
    palette: {
        text: {
            primary: "#cfd8dc",
            secondary: "rgba(255,255,255,0.54)",
        },
        primary: {
            light: "#777777",
            main: '#212121',
            background: '#333333',
            text: '#ffffff',
        },
        secondary: { // form border
            main: '#cfd8dc',
            text: "#212121",
            secondaryText: "#757575",
        },
        elements: { // post card
            main: "#424242",
            secondary: "#575757",
            text: "#cfd8dc",
            secondaryText: "rgba(255,255,255,0.54)",
        },
        links: {
            visited: "#bdbdbd",
            hover: "#e0e0e0",
            main: "#eeeeee",
        },
        buttons: {
            text: "#212121",
            hoverText: "#212121",
            hover: "#757575",
            main: "rgba(255,255,255,0.54)",
        },
        footer: {
            main: "#ffffff",
            link: "#ffffff"
        },
    }
});