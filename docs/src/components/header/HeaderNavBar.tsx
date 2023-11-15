/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ROUTES from 'docs/src/route';
import Link from 'docs/src/modules/components/Link';


const Navigation = styled('nav')(({ theme }) => [
  {
    '& ul': {
      padding: 0,
      margin: 0,
      listStyle: 'none',
      display: 'flex',
    },
    '& li': {
      color: (theme.vars || theme).palette.text.primary,
      ...theme.typography.body2,
      fontWeight: theme.typography.fontWeightBold,
      '& > a, & > button': {
        display: 'inline-block',
        color: 'inherit',
        font: 'inherit',
        textDecoration: 'none',
        padding: theme.spacing('8px', 1),
        borderRadius: (theme.vars || theme).shape.borderRadius,
        '&:hover': {
          color: (theme.vars || theme).palette.grey[700],
          backgroundColor: (theme.vars || theme).palette.grey[50],
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'initial',
          },
        },
        '&:focus-visible': {
          color: (theme.vars || theme).palette.grey[700],
          outline: 0,
          backgroundColor: (theme.vars || theme).palette.grey[100],
        },
      },
      '& > div': {
        cursor: 'default',
      },
    },
  },
  theme.applyDarkStyles({
    '& li': {
      '& > a, & > button': {
        '&:hover': {
          backgroundColor: (theme.vars || theme).palette.primaryDark[700],
          color: (theme.vars || theme).palette.primaryDark[200],
        },
        '&:focus-visible': {
          backgroundColor: (theme.vars || theme).palette.primaryDark[600],
          color: (theme.vars || theme).palette.primaryDark[100],
        },
      },
    },
  }),
]);



export default function HeaderNavBar() {
  const navRef = React.useRef<HTMLUListElement | null>(null);
  return (
    <Navigation>
      <ul ref={navRef} >
        <li>
          <Link href={ROUTES.pricing}>智能talk</Link>
        </li>
        <li>
          <Link href={ROUTES.about}>转债数据</Link>
        </li>
        <li>
          <Link href={ROUTES.blog}>关于我们</Link>
        </li>
      </ul>
    </Navigation>
  );
}
