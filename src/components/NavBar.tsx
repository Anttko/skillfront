import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { useBoundStore } from '../stores';

const Links = [
  { name: 'Sfia selection', path: '/skills' },
  { name: 'Rank sfia skill', path: '/rank-sfia' },
  { name: 'Soft Skills', path: '/soft-skills' },
  { name: 'Summary', path: '/summary' },
  { name: 'Gdpr info', path: '/gdprinfo' },
];

type NavLinkProps = {
  name: string;
  path: string;
};

const NavLink = ({ name, path }: NavLinkProps): JSX.Element => (
  <Link
    as={RouterLink}
    to={path}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('jamk.magentaJAMK', 'jamk.magentaJAMK'),
    }}
  >
    {name}
  </Link>
);

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { setNotification, clearAll, clearAllSoft, logout } = useBoundStore((state) => ({
    setNotification: state.setNotification,
    clearAll: state.clearAll,
    clearAllSoft: state.clearAllSoft,
    logout: state.logout,
  }));

  const navigateToHome = () => {
    logout();
    navigate('/');
  };
  const resetAllSelections = () => {
    try {
      clearAll();
      clearAllSoft();
      setNotification({
        message: 'All selections cleared',
        errorType: 'success',
        displayTime: 5000,
      });
    } catch (error) {
      setNotification({
        message: error,
        errorType: 'error',
        displayTime: 5000,
      });
    }
  };

  return (
    <>
      <Box bg={useColorModeValue('jamk.blueJAMK', 'jamk.blueJAMK')} textColor={'white'}>
        <Flex h={12} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            bgColor={'jamk.magentaJAMK'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            _hover={{
              opacity: 0.8,
            }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Rodon</Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.name} path={link.path} name={link.name} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {/* add here */}
            <Menu>
              <MenuButton
                as={Button}
                variant={'solid'}
                color={'white'}
                bg={'jamk.magentaJAMK'}
                size={'sm'}
                mr={4}
                leftIcon={<AddIcon />}
                _hover={{
                  opacity: 0.8,
                }}
                _active={{
                  bg: 'jamk.magentaJAMK',
                  transform: 'scale(0.95)',
                }}
              >
                Quit / Reset
              </MenuButton>
              <MenuList textColor={'black'}>
                <MenuItem onClick={navigateToHome}>Quit</MenuItem>
                <MenuDivider />
                <MenuItem onClick={resetAllSelections}>Reset all sections </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} path={link.path} name={link.name} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
export default NavBar;
