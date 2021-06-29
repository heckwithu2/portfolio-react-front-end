
import { makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    event: {
        paddingLeft: `15%`,
    },
    eventDecal: {
        minHeight: `2px`,
        margin: `10px`,
        borderLeft: `2px solid ${theme.text.primary}`,
    }
}));