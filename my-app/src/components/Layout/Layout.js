
import React from 'react';
import Auxillary from '../../HigherOrderComponent/Auxillary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

const layout = ( props ) => (
<Auxillary>
    <Toolbar/>
    <main className = {classes.Content}>
        {props.children}
    </main>
</Auxillary>
);

export default layout;