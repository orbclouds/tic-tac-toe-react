import { DEFAULT_BORDER_STYLE } from './Square.const';

interface BorderCSS {
  borderTop?: string;
  borderLeft?: string;
  borderRight?: string;
  borderBottom?: string;
}

export const getBorder = (
  x: number,
  y: number
): BorderCSS => {
  let border: BorderCSS = {} as BorderCSS;

  if (x >= 1)
    border = {
      ...border,
      borderLeft: DEFAULT_BORDER_STYLE,
    };

  if (x <= 1)
    border = {
      ...border,
      borderRight: DEFAULT_BORDER_STYLE,
    };

  if (y <= 1)
    border = {
      ...border,
      borderBottom: DEFAULT_BORDER_STYLE,
    };

  if (y >= 1)
    border = {
      ...border,
      borderTop: DEFAULT_BORDER_STYLE,
    };

  return border;
};
