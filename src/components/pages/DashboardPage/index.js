import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import LogoImage from '../../../images/timers-logotype-new.png';

import TagIcons from "@material-ui/icons/AddLocation";
import MoneyIcon from "@material-ui/icons/AttachMoney";

import { mainMenuItems, secondaryMenuItems } from './menuItemsList';

import "./styles.scss";
import { Link } from '@material-ui/core';

class DashboardPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            drawerOpen: true
        }

        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
    }


    handleDrawerOpen() {
        this.setState({ drawerOpen: true })
    }

    handleDrawerClose() {
        this.setState({ drawerOpen: false })
    }

    render() {

        const { drawerOpen } = this.state;

        return (
            <div className="app-container">
                <CssBaseline />
                <AppBar position="absolute" className={!drawerOpen ? "app-bar" : "app-bar app-bar_shift"}>
                    <Toolbar className="toolbar">
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={!drawerOpen ? "menuButton" : "menuButton menuButtonHidden"}
                        ><MenuIcon />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap>
                            Time trackers
                        </Typography>
                        <div>
                            <Link href="/login" className="logout-button">
                                <Typography component="p" variant="body1" color="inherit"> Log out</Typography>
                            </Link>
                            <IconButton color="inherit">
                                <Badge badgeContent={1} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    open={drawerOpen}
                    className={drawerOpen ? "app-drawer" : "app-drawer app-drawer_close"}
                >
                    <div className="toolbar-icon">
                    <img src={LogoImage} />
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>{mainMenuItems}</List>
                    <Divider />
                    <List>{secondaryMenuItems}</List>
                </Drawer>
                <main className="main-content">
                    <div className="add-new">
                        <div className="create">
                            <InputBase
                                placeholder="What are you working on?"
                                className="input"
                                autoFocus
                                inputProps={{
                                    'aria-label': 'Description',
                                }}
                            />
                            <div><Button size="small" variant="outlined" color="primary">+ Project</Button></div>
                        </div>
                        <div className="extras">
                            <div className="icons"><TagIcons /></div>
                            <div className="icons"><MoneyIcon /></div>
                            <div className="counter">00:00:00 <Button size="small" variant="contained" color="secondary">START</Button></div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default DashboardPage;