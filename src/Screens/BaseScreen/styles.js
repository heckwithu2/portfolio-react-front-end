
import { makeStyles} from "@material-ui/core";
import { globalSpacing  } from "../../Themes";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
      },
    main: {
        height: `100vh`,
        width: '100vw',
        backgroundColor: theme.palette.background.shadow,
        color: theme.text.primary,
    },
    mainContainer: {
        marginTop: `${globalSpacing/2}px`,
        backgroundColor: `inherit`,
        height: `auto`,
        width: '100vw',
    }
}));