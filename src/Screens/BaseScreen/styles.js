
import { makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    main: {
        height: `100vh`,
        width: '100vw',
        backgroundColor: theme.palette.background.shadow,
        color: theme.text.primary,
    },
    mainContainer: {
        backgroundColor: theme.palette.background.default,
        height: `100vh`,
        width: '100vw',
    }
}));