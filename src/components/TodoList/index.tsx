import {ContainerMainTodoList} from './styles'

import Switch from '@material-ui/core/Switch';

import sunIMG from '../../assets/icon-sun.svg'
import moonIMG from '../../assets/icon-moon.svg'

interface TodoListProps {
    setIsMoon: (value: boolean) => void,
    isMoon: boolean,
}


export const TodoList = ({setIsMoon, isMoon}: TodoListProps) => {

    return (
        <ContainerMainTodoList className='container-main'>
        <section className='container-header'>
            <h2>T O D O</h2>
            <div>
                <img src={sunIMG} alt="Sum theme"/>
                <Switch checked={isMoon} color="primary" onChange={(e) => setIsMoon(!isMoon)} />
                <img src={moonIMG} alt="Moon theme"/>
            </div>
        </section>
        <section className='container-todoList'>
            
        </section>
      </ContainerMainTodoList>
    );
}