import styled from 'styled-components';
import {
    space,
    layout,
    color,
    flexbox,
    background,
    border,
    position
} from 'styled-system';

export const Box = styled('div')(
    color,
    space,
    layout,
    flexbox,
    background,
    border,
    position
);

// Box - заменяет обертки (контейнеры)