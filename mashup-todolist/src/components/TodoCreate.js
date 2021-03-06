import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from './TodoContext';

const CircleButton = styled.button`
    background: #38d9a9;
    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }

    position: absolute;
    display: block;
    justify-content: center;
    align-items: center;
    bottom: 0px;
    left: 50%;
    width: 80px;
    height: 80px;
    font-size: 3.5rem;
    line-height: 0;
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    z-index: 5;
    cursor: pointer;
    transform: translate(-50%, 50%);
    trasition: 0.125s all ease-in;
    ${props =>
        props.open &&
        css`
            background: #ff6b6b;
            &:hover {
                background: #ff8787;
            }
            &:active {
                background: #fa5252;
            }
            transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
`;

const InsertForm = styled.form`
    padding: 32px 32px 72px 32px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
    background: #f8f9fa;
`;

const Input = styled.input`
    box-sizing: border-box;
    padding: 12px;
    width: 100%;
    font-size: 18px;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    outline: none;
`;

function TodoCreate() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onToggle = () => setOpen(!open);
    const onChange = e => setValue(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false
            }
        });
        setValue('');
        setOpen(false);
        nextId.current += 1;
    };

    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={onSubmit}>
                        <Input 
                            autoFocus 
                            placeholder="??? ?????? ?????? ???, Enter??? ????????????" 
                            onChange={onChange}
                            value={value}
                        />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </>
    );
}

export default React.memo(TodoCreate);