import React, {Component,} from 'react';
import { createStyles, makeStyles, Theme,
    withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LeftPopUpNavigation from "./LeftPopUpNavigation";
import Routing from "./Routing"
import {BrowserRouter} from "react-router-dom";


interface useStyles {
    classes: any
}

class HeaderMenu extends Component<useStyles, {}>{

    render() {
        const {classes} = this.props;

        return (
            <BrowserRouter>
                <div className={classes.root}>
                    <AppBar position="static" className={classes.appBar}>
                        <Toolbar>
                            <LeftPopUpNavigation/>
                            <Typography variant="h6" className={classes.title}>
                                Eldor
                            </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                    <Routing/>
                </div>
            </BrowserRouter>
        );
    }
}

const useStyles = (theme: Theme) =>
    ({
        root: {
            flexGrow: 1,

        },

        menuIcon: {
            color: 'white'
        },

        appBar: {
            background: '#00B2BF'
        },

        menuButton: {
            marginRight: theme.spacing(0),
        },
        title: {
            flexGrow: 1,
        },
});

export default withStyles(useStyles)(HeaderMenu);
