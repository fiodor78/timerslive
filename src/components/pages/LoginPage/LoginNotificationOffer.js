import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GiftImage from '../../../images/gift.png';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import grey from '@material-ui/core/colors/grey';

export default function LoginNotificationOffer() {

    const classes = useStyles();

    return (
        <div className="login_notifiaction" >
            <div className="login_notification--content">
                <Typography className={classes.h1} component="h1" variant="h4">Like using our Timers?</Typography>
                <Typography className={classes.content} component="p" variant="body1">
                    Leave us a review on Capterra! As a proof of appreciation, 
                    the first 100 reviewers will get a $20 gift card of their choice!
                    <br />(Amazon, Visa, Starbucks, or iTunes)
                </Typography>
                <Button variant="outlined"
                    color="primary"
                    size="large"
                    className={classes.button}>Leave review</Button>
                <img src={GiftImage} className={classes.image} />
                <div className={classes.footerContainer}>
                    <div className={classes.footer}>
                        <Link href="#" className={classes.smallLink} variant="caption">What&apos;s New</Link>
                        <Link href="#" className={classes.smallLink} variant="caption">Facebook</Link>
                        <Link href="#" className={classes.smallLink} variant="caption">Twitter</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


const useStyles = makeStyles(theme => ({

    h1: {
        marginBottom: '1.5625rem',
        color: grey[600],
    },
    content: {
        color: grey[600],
        maxWidth: '27.5rem',
    },
    image: {
        borderStyle: 'none',
        display: 'inline-block',
        verticalAlign: 'middle',
        maxWidth: '100%',
        height: 'auto',
    },
    button: {
        margin: theme.spacing(3, 0, 2),
        width: '11rem'
    },
    footerContainer: {
        width: '100%',
    },
    footer: {
        display: 'flex',
        marginRight: 'auto',
        marginLeft: 'auto',
        justifyContent: 'space-between',
        width: '50%',
    },
    smallLink: {
        color: grey[400],
    }
}));
