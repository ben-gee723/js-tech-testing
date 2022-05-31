import { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import styled from 'styled-components';
import { css } from "@emotion/react"
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`



export const SpinnerDH = ({ loading }) => {
    const [color, setColor] = useState("#ffffff");

    return (
        <ClipLoader color={color} loading={loading} css={override} size={150} />
    )

}