import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      color="current"
      top={"2"}
      right={"2"}
      pos={'fixed'}
      zIndex={"overlay"}
      size={'sm'}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
      bg={'whiteAlpha.900'}
    />
  );
};

export default ColorModeSwitcher;
