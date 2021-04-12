import React from 'react';
import { Container, Typography } from '@material-ui/core'
import { CheckCircleOutlineTwoTone } from '@material-ui/icons';

const Item = ({ argument, index }) => {
    return (
        <Container key={index} style={{ display: 'flex', marginTop: '10%' }}>
            <CheckCircleOutlineTwoTone fontSize="large" style={{ color: 'green' }} />
            <Container style={{ display: 'block' }}>
                <Typography variant="body1">{argument.title}</Typography>
                <Typography variant="body2">{argument.subtitle}</Typography>
            </Container>
        </Container>
    );
};

export default Item;
