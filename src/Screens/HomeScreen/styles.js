import { makeStyles} from "@material-ui/core";
import { globalSpacing } from "../../Themes";

export const useStyles = makeStyles((theme) => ({
    home: {
        paddingBottom: `45px`,
    },
    categoriesSection: {
        marginTop: `${globalSpacing/2}px`,
    },
    cv: {
        marginTop: `${globalSpacing/2}px`,

    }
}));