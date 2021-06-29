import { makeStyles} from "@material-ui/core";
import { globalSpacing, globalBorderRadius  } from "../../Themes";

export const useStyles = makeStyles((theme) => ({
    header: {
        marginLeft: `${globalSpacing/2}px`,
        marginRight: `${globalSpacing/2}px`,
        marginTop: `${globalSpacing/2}px`,
        marginBottom: `${globalSpacing/2}px`,
        padding: `0px`,
        backgroundColor: theme.palette.background.default,
        height: `auto`,
        minHeight: `15vh`,
        borderRadius: `${globalBorderRadius}px`,
        border: `2px solid ${theme.categories.blue.main}`,
    }
}));