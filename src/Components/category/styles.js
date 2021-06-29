import { makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    category: {
        height: `150px`,
        backgroundColor: theme.palette.background.default,
        border: `1px solid ${theme.secondary.background.default}`,
        borderRadius: `3px`,
    },

}));