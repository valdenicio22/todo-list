import { Typography } from '@material-ui/core';

import { ContainerMain } from './styles'

import iconMoon from '../../assets/icon-moon.svg'



export function Main(){
    return(
        <ContainerMain>
            <div className="title">
                <Typography
                    variant='h6'
                    component='h1'
                    color='textPrimary'
                    gutterBottom
                >
                    T O D O
                </Typography>
                <img src={iconMoon} alt="icon moon"/>
            </div>
                <input type="text"/>
                <button type="submit">Add</button>

                <ul>
                    <li> Task description 1 </li>
                    <li> Task description 2 </li>
                    <li> Task description 3 </li>
                </ul>
        </ContainerMain>
    );
}