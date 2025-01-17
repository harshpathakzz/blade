import React from 'react';
import { listItemUnorderedBulletSize } from './listTokens';
import { useListContext } from './ListContext';
import { useTheme } from '~components/BladeProvider';
import { Svg, Circle, Rect } from '~components/Icons/_Svg';

type UnorderedIconProps = {
  iconDimensions: string;
  color: string;
};

const UnorderedLevel1Icon = ({ iconDimensions, color }: UnorderedIconProps): React.ReactElement => {
  return (
    <Svg width={iconDimensions} height={iconDimensions} viewBox="0 0 6 6" fill="none">
      <Circle cx="3px" cy="3px" r="3px" fill={color} />
    </Svg>
  );
};

const UnorderedLevel2Icon = ({ iconDimensions, color }: UnorderedIconProps): React.ReactElement => {
  return (
    <Svg width={iconDimensions} height={iconDimensions} viewBox="0 0 6 6" fill="none">
      <Circle cx="3px" cy="3px" r="2.5px" stroke={color} />
    </Svg>
  );
};

const UnorderedLevel3Icon = ({ iconDimensions, color }: UnorderedIconProps): React.ReactElement => {
  return (
    <Svg width={iconDimensions} height={iconDimensions} viewBox="0 0 6 6" fill="none">
      <Rect width={iconDimensions} height={iconDimensions} rx="1px" fill={color} />
    </Svg>
  );
};

const UnorderedItemIcon = ({ level }: { level?: number }): React.ReactElement => {
  const { theme, platform } = useTheme();
  const { size } = useListContext();
  const iconDimensions = listItemUnorderedBulletSize[platform][size];
  const color = theme.colors.surface.text.placeholder.lowContrast;

  switch (level) {
    case 1:
      return <UnorderedLevel1Icon iconDimensions={iconDimensions} color={color} />;
    case 2:
      return <UnorderedLevel2Icon iconDimensions={iconDimensions} color={color} />;
    case 3:
      return <UnorderedLevel3Icon iconDimensions={iconDimensions} color={color} />;
    default:
      return <UnorderedLevel3Icon iconDimensions={iconDimensions} color={color} />;
  }
};

export { UnorderedItemIcon };
