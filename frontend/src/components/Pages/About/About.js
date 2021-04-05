import React from 'react'
import { Container, Typography } from '@material-ui/core'

import useStyles from './styles';

const About = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography variant="h3">ИМЕ - ФИРМА</Typography>
            <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum, odio eget accumsan eleifend, sapien nulla auctor odio, a volutpat ligula tellus ac nulla. Ut pretium auctor magna, eget congue sapien sagittis quis. Vivamus mattis mollis pellentesque. Duis egestas tempor dictum. Sed euismod gravida scelerisque. Curabitur justo tellus, posuere non lacus eget, ultrices auctor ipsum. Mauris pellentesque erat sed purus bibendum ultricies.
                Praesent venenatis nulla at nulla consequat faucibus. Suspendisse potenti. Sed sagittis sapien non vestibulum pellentesque. Sed ornare tortor ac ipsum scelerisque, eu interdum elit condimentum. Suspendisse tincidunt, eros et auctor dignissim, nisl est iaculis diam, et sollicitudin nisl est a nibh. Integer ultrices hendrerit leo et lobortis. Aliquam tempor, nulla fermentum rhoncus euismod, arcu orci ultrices nisi, quis luctus risus arcu in dolor. Proin a leo tincidunt, fermentum est sit amet, convallis metus. Curabitur ex justo, interdum sit amet placerat id, finibus ac erat. In lorem tortor, viverra sit amet faucibus nec, molestie vel risus. Proin efficitur vehicula purus a aliquet. Maecenas non est massa. Vestibulum placerat elit eu nunc hendrerit elementum. Morbi ipsum lorem, aliquet eu lectus eget, porttitor mollis risus. Nunc lobortis id urna nec fringilla. Fusce at nulla eget ipsum pharetra finibus.
                Aliquam erat volutpat. Integer ultricies ligula nunc, vel porttitor lorem euismod non. Proin lacinia est vitae diam iaculis, sed dictum dolor pretium. Suspendisse in metus eu quam tincidunt convallis in finibus elit. Nullam gravida dolor mattis ipsum tempus euismod. Morbi et metus eleifend, volutpat elit sed, dictum odio. Sed imperdiet nunc ac libero efficitur, quis tincidunt lectus feugiat.
                Ut iaculis dictum venenatis. Proin semper eleifend interdum. Vestibulum quis ullamcorper lorem. Nunc vestibulum feugiat leo nec accumsan. Proin egestas vel nisl et convallis. Nullam sed erat lacinia, sollicitudin est rhoncus, sagittis ligula. Duis sed auctor eros, a lacinia sem. Phasellus a ipsum eget sem sagittis tempus non et massa. Praesent non sodales lorem. Suspendisse laoreet nisi leo, nec pulvinar libero malesuada nec.
                Vivamus nec molestie turpis. Suspendisse potenti. Donec posuere elementum porta. Mauris rutrum id tortor in volutpat. Sed faucibus interdum tellus, sed rhoncus nibh molestie tristique. Aenean tincidunt posuere mi, tempus sodales lectus pretium sit amet. Praesent ligula lorem, cursus a fringilla at, tristique a dolor. Etiam mollis est quis imperdiet condimentum. Aliquam eu velit felis. Vivamus a gravida ipsum, vitae vulputate arcu.
            </Typography>
        </Container>
    )
}

export default About
