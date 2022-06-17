import { renderHook } from '@testing-library/react-hooks';
import themeWrapper from '../../../_helpers/testing/themeWrapper';
import useIconProps from './useIconProps';

describe('useIconProps', () => {
  it('should return a xlarge icon with the correct color', () => {
    const { result } = renderHook(
      () => useIconProps({ size: 'xlarge', color: 'feedback.icon.neutral.lowContrast' }),
      { wrapper: themeWrapper },
    );
    expect(result.current.height).toEqual('32px');
    expect(result.current.width).toEqual('32px');
    expect(result.current.iconColor).toEqual('hsla(216, 27%, 36%, 1)');
  });
  it('should return a large icon with the correct color', () => {
    const { result } = renderHook(
      () => useIconProps({ size: 'large', color: 'feedback.icon.information.lowContrast' }),
      { wrapper: themeWrapper },
    );
    expect(result.current.height).toEqual('24px');
    expect(result.current.width).toEqual('24px');
    expect(result.current.iconColor).toEqual('hsla(193, 100%, 35%, 1)');
  });
  it('should return a medium icon with the correct color', () => {
    const { result } = renderHook(
      () => useIconProps({ size: 'medium', color: 'action.icon.primary.default' }),
      { wrapper: themeWrapper },
    );
    expect(result.current.height).toEqual('20px');
    expect(result.current.width).toEqual('20px');
    expect(result.current.iconColor).toEqual('hsla(0, 0%, 100%, 1)');
  });
  it('should return a small icon with the correct color', () => {
    const { result } = renderHook(
      () => useIconProps({ size: 'small', color: 'feedback.icon.negative.lowContrast' }),
      { wrapper: themeWrapper },
    );
    expect(result.current.height).toEqual('16px');
    expect(result.current.width).toEqual('16px');
    expect(result.current.iconColor).toEqual('hsla(8, 73%, 47%, 1)');
  });
  it('should return a xsmall icon with the correct color', () => {
    const { result } = renderHook(
      () => useIconProps({ size: 'xsmall', color: 'action.icon.secondary.default' }),
      { wrapper: themeWrapper },
    );
    expect(result.current.height).toEqual('12px');
    expect(result.current.width).toEqual('12px');
    expect(result.current.iconColor).toEqual('hsla(213, 89%, 56%, 1)');
  });
  it('should return a xxsmall icon with the correct color', () => {
    const { result } = renderHook(
      () => useIconProps({ size: 'xxsmall', color: 'feedback.icon.positive.lowContrast' }),
      { wrapper: themeWrapper },
    );
    expect(result.current.height).toEqual('10px');
    expect(result.current.width).toEqual('10px');
    expect(result.current.iconColor).toEqual('hsla(160, 100%, 26%, 1)');
  });
});