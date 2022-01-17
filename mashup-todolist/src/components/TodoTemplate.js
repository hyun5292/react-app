import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 96px;
    margin-bottom: 32px;
    width: 512px;
    height: 768px;
    border-radius: 16px;
    background: white;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

function TodoTemplate({ children }) {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

export default TodoTemplate;