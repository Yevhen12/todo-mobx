import React, { useState } from 'react'
import { observer } from 'mobx-react-lite';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import taskStore from '../../store/taskStore';
import { Box } from '@mui/material'
import { ITask } from '../../interfaces'

type PropsType = {
    task: ITask
}

const Task: React.FC<PropsType> = observer(({ task }) => {

    const [isHovered, setIsHovered] = useState<boolean>(false)
    const allItems = taskStore.tasks

    return (
        <Box
            style={{ padding: '18px', marginBottom: '10px', cursor: 'pointer', display: 'flex', alignItems:'center', justifyContent:'space-between', border:'1px solid #e3e3e3' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <FormControlLabel
                label={task.text}
                control={
                    <Checkbox
                    color='secondary'
                        checked={task.completed}
                        onChange={() => taskStore.hendleComplited(task.id)}
                    />
                }
            />
            {
                isHovered && (
                    <Delete onClick = {() => taskStore.deleteTask(task)}/>
            )
            }
        </Box>
    )
})

export default Task