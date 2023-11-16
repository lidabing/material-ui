import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { alpha } from '@mui/material/styles';
import SvgMuiLogotype from 'docs/src/icons/SvgMuiLogotype';
import EmailSubscribe from 'docs/src/components/footer/EmailSubscribe';
import ROUTES from 'docs/src/route';
import DiscordIcon from 'docs/src/icons/DiscordIcon';
import Link from 'docs/src/modules/components/Link';
import SvgStackOverflow from 'docs/src/icons/SvgStackOverflow';

interface AppFooterProps {
  stackOverflowUrl?: string;
}

export default function AppFooter(props: AppFooterProps) {
  const { stackOverflowUrl } = props;

  return (
    <Container component="footer">
      <Divider />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        justifyContent={{ sm: 'space-between' }}
        gap={{ xs: 2, sm: 1 }}
        sx={{ my: 4 }}
      >
        <Typography color="text.tertiary" variant="caption" fontWeight={400}>
          Copyright © {new Date().getFullYear()} 杭州无理数科技有限公司. 备案号:xxxxx
        </Typography>
        <Stack spacing={1} direction="row" flexWrap="wrap" useFlexGap>
          <IconButton
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/mui"
            aria-label="github"
            title="GitHub"
            size="small"
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
          <IconButton
            target="_blank"
            rel="noopener noreferrer"
            href={ROUTES.rssFeed}
            aria-label="RSS Feed"
            title="RSS Feed"
            size="small"
          >
            <RssFeedIcon fontSize="small" />
          </IconButton>
          <IconButton
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/MUI_hq"
            aria-label="twitter"
            title="Twitter"
            size="small"
          >
            <TwitterIcon fontSize="small" />
          </IconButton>
          <IconButton
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/mui/"
            aria-label="linkedin"
            title="LinkedIn"
            size="small"
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
          <IconButton
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/@MUI_hq"
            aria-label="YouTube"
            title="YouTube"
            size="small"
          >
            <YouTubeIcon fontSize="small" />
          </IconButton>
          <IconButton
            target="_blank"
            rel="noopener noreferrer"
            href="https://mui.com/r/discord/"
            aria-label="Discord"
            title="Discord"
            size="small"
          >
            <DiscordIcon fontSize="small" />
          </IconButton>
          {stackOverflowUrl ? (
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href={stackOverflowUrl}
              aria-label="Stack Overflow"
              title="Stack Overflow"
              size="small"
            >
              <SvgStackOverflow fontSize="small" />
            </IconButton>
          ) : null}
        </Stack>
      </Stack>
    </Container>
  );
}
