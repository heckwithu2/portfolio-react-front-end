import { makeStyles} from "@material-ui/core";
import { globalSpacing, globalBorderRadius } from "../../Themes";

export const useStyles = makeStyles((theme) => ({
    category: {
        marginTop: `${globalSpacing}px`,
        paddingTop: `0px`,
        height: `auto`,
        minHeight: `250px`,
        margin: `${globalSpacing/0}px`,
        backgroundColor: theme.palette.primary.dark,
        border: `2px solid ${theme.palette.secondary.main}`,
        borderRadius: `${globalBorderRadius}px`,
        textAlign: `center`,
    },
    categoryTitle: {
        margin: `${globalSpacing/0}px`,
        maxHeight: `25%`,
        minHeight: `15%`,
        padding: `10px`,
        width: `100%`,
        textAlign: `left`,
        backgroundColor: theme.categories.blue.main,
        color: theme.text.primary,
        fontWeight: `bolder`,
        cursor: `pointer`,
    },
    blueCategory: {
        margin: `${globalSpacing/2}px`,
        backgroundColor: theme.palette.primary.main,
        paddingTop: `0px`,
        height: `auto`,
        minHeight: `250px`,
        border: `2px solid ${theme.categories.blue.main}`,
        borderRadius: `${globalBorderRadius}px`,
        textAlign: `center`,
    }
}));