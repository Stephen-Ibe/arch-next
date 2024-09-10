import { Button, ButtonProps } from '@mantine/core';

type TKJButton = ButtonProps;

const KJButton = ({
  c,
  children,
  color,
  disabled,
  fullWidth,
  leftSection,
  loaderProps,
  loading,
  radius,
  rightSection,
  size,
  variant,
}: TKJButton) => {
  return (
    <Button
      c={c}
      color={color}
      disabled={disabled}
      fullWidth={fullWidth}
      leftSection={leftSection}
      loaderProps={loaderProps}
      loading={loading}
      radius={radius}
      rightSection={rightSection}
      size={size}
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default KJButton;
