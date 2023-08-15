import React from 'react'

type Props = {
    title: string;
    fetchUrl: string;
    isLargeRow: boolean;
}

const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
    return (
        <div className='row'></div>
    )
}

export default Row