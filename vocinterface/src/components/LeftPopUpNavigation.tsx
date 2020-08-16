import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {BrowserRouter, Route, Link} from 'react-router-dom';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function LeftPopUpNavigation() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
        </div>
    );

    return (
        <div>
            <Button onClick={toggleDrawer("left", true)}>
                <IconButton edge="start"  aria-label="menu">
                    <MenuIcon style={{color: "white"}} />
                </IconButton>
            </Button>
                <Drawer  anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
                    <ListItem>
                        <ListItemIcon><InboxIcon /> </ListItemIcon>
                        <ListItemText > <Link to="/" className="item"  onClick={toggleDrawer("left", false)}>Dictionaries</Link> </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><InboxIcon /> </ListItemIcon>
                        <ListItemText > <Link to="/stories" className="item" onClick={toggleDrawer("left", false)}>Short Stories</Link> </ListItemText>
                    </ListItem>
                </Drawer>
        </div>
    );
}

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});
