import React from "react";
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import styled from 'styled-components';
import { faUserMd, faUser, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mainLogo from '../mainLogo.png';

const drawerWidth = 307;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

const StyledNavItem = styled.div`
    a {
        color: ${(props) => props.active ? "white" : "black"};
        :hover {
            opacity: 0.7;
            text-decoration: none; /* Gets rid of underlining of icons */
        }  
    }
`;

function SideBar(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <div style={{
                display:'inline-flex', 
                fontSize:30,
                fontWeight:'bold',
                position:'absolute',
                left:50,
                top:30
                }}>
                <img src={mainLogo} alt="mainLogo" />&nbsp; JOMEDIC
            </div>

            <br />
            <br />

            <List>
                <StyledNavItem>
                    <NavLink to="/">
                        <ListItem button style={{ display: 'inline-flex' }}>
                            <DashboardOutlinedIcon />
                            <ListItemText style={{ position: 'absolute', left: 80, margin: 'auto' }}>Home Dashboard</ListItemText>
                        </ListItem>
                    </NavLink>

                    <NavLink to="/LTenant">
                        <ListItem button style={{ display: 'inline-flex' }}>
                            <FontAwesomeIcon icon={faUserMd} size='2x' />
                            <ListItemText style={{ position: 'absolute', left: 80, margin: 'auto' }}>Manage Tenant</ListItemText>
                        </ListItem>
                    </NavLink>

                    <NavLink to="/LCustomer">
                        <ListItem button style={{ display: 'inline-flex' }}>
                            <FontAwesomeIcon icon={faUser} size='2x' />
                            <ListItemText style={{ position: 'absolute', left: 80, margin: 'auto' }}>Manage Customer</ListItemText>
                        </ListItem>
                    </NavLink>

                    <NavLink to="/Report">
                        <ListItem button style={{ display: 'inline-flex' }}>
                            <FontAwesomeIcon icon={faChartLine} size='2x' />
                            <ListItemText style={{ position: 'absolute', left: 80, margin: 'auto' }}>Report & Statistic</ListItemText>
                        </ListItem>
                    </NavLink>
                </StyledNavItem>

            </List>

            <IconButton color="inherit" className={classes.iconButtonAvatar}>
                <Avatar style={{
                    position: 'absolute',
                    top: '300px',
                    left: '20px'
                }}><PersonIcon /></Avatar>
            </IconButton>
            <Typography style={{}}>
                <h5 style={{
                    position: 'absolute',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    top: '570px',
                    left: '80px'

                }}>Fatin</h5>
                <h6 style={{
                    position: 'absolute',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#979797',
                    top: '600px',
                    left: '80px'

                }}> Administrator</h6>
            </Typography>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Toolbar>
                <IconButton style={{ marginBottom: '1600%' }}
                    color="black"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>

            </Toolbar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === "rtl" ? "right" : "left"}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
            </main>
        </div >
    );
}

SideBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.any
};

export default SideBar;
