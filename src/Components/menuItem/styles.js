
import { makeStyles} from "@material-ui/core";
import { white } from "../../Themes";

export const useStyles = makeStyles((theme) => ({
    
    item: {
        minWidth: `50px`,
        marginRight: `20%`,
    },
    title: {
        color: white,
        '&:hover': {
            color: theme.categories.blue.light,
         },
    },
    neDecor: {
        textDecoration: `none`,
        '&:hover': {
            textDecoration: `unset`,
            color: theme.categories.blue.light,
         },
         '&:active': {
            textDecoration: `unset`,
            color: theme.categories.blue.main,
         },
    },
    titleActive : {
        color: theme.categories.blue.light,
    },
    
}));