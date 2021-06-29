import { makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    category: {
        paddingTop: `0px`,
        height: `250px`,
        margin: `10px`,
        backgroundColor: theme.palette.primary.dark,
        border: `2px solid ${theme.palette.secondary.main}`,
        borderRadius: `5px`,
        textAlign: `center`,
    },
    categoryTitle: {
        margin: `0px`,
        maxHeight: `25%`,
        minHeight: `15%`,
        padding: `10px`,
        width: `100%`,
        textAlign: `left`,
        backgroundColor: theme.categories.blue.main,
        color: theme.text.secondary,
        fontWeight: `bolder`,
        cursor: `pointer`,
    },
    blueCategory: {
        backgroundColor: theme.palette.primary.dark,
        paddingTop: `0px`,
        height: `250px`,
        margin: `10px`,
        border: `2px solid ${theme.categories.blue.main}`,
        borderRadius: `5px`,
        textAlign: `center`,
    }
}));