import { RotatingLines } from 'react-loader-spinner'
import styled from 'styled-components';
/* 
const RotatingLines = styled.div`
    height="100"
    width="100"
    color='blue'
    ariaLabel='loading'
    `
*/

export const Loader = () => {
    return (
        <RotatingLines />
    )
}