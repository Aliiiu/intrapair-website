import React from 'react';

interface FlexProp {
  children: React.ReactNode;
  className?: string;
  direction?: string;
  gap?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  flexGrow?: string;
  style?: any;
  [x: string]: any;
}

export function Flex({
  children,
  className,
  direction,
  gap = '1rem',
  justify,
  align,
  wrap = 'nowrap',
  flexGrow,
  style,
  ...rest
}: FlexProp): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        flexWrap: wrap,
        gap,
        justifyContent: justify,
        alignItems: align,
        flexGrow,
        ...style,
        ...rest,
      }}
      className={className}
    >
      {children}
    </div>
  );
}

export default Flex;
