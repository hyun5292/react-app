import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false
    };

    //첫 번째 파라미터는 에러의 내용, 두 번째 파라미터에서는 에러가 발생한 위치
    componentDidCatch(error, info) {
        console.log('에러가 발생했습니다.');
        console.log({
            error,
            info
        });
        this.setState({
            error: true
        });
    }

    render() {
        if(this.state.error) {
            return <h1>에러 발생!</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
