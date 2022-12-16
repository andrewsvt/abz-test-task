import React, { ReactElement } from 'react';
import { Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import styled from '@emotion/styled';

interface IStyledTooltipProps {
  children: ReactElement;
  title: string;
}

export const StyledTooltip: React.FC<IStyledTooltipProps> = ({ title, children }) => {
  const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#000000DE',
      padding: '3px 16px',
      borderRadius: '4px',
      fontFamily: 'Nunito',
      fontSize: '16px',
      lineHeight: '26px',
    },
  });

  return (
    <StyledTooltip title={title} placement={'bottom-start'} followCursor>
      {children}
    </StyledTooltip>
  );
};
