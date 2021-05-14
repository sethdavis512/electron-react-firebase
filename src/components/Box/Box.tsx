/**
 * Simplified modification of the Theme UI Box
 * http://bit.ly/3pzPiAr
 */
import styled from '@emotion/styled';
import { css } from '@theme-ui/css';

// Parse the style objects passed via `sx` to the `css(...)` function
const sx = (props) => css(props.sx)(props.theme);
// Similar to `sx`, but used for "internal" base component styles
const base = (props) => css(props.__css)(props.theme);

// 👆 This makes adding `sx` style overrides easier
// for complex selectors like focus, hover, etc.
const Box = styled.div(
    {
        boxSizing: 'border-box',
        margin: 0,
        minWidth: 0,
    },
    base,
    sx,
    (props) => props.css
);

export default Box;
