import React from 'react';

interface Props {
    title: string,
    count: number
}

const CountView = (props: Props) => {
    return (
        <div>{props.title} {props.count}</div>
    )
}

export default CountView;
