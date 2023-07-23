import { useState } from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import { Button, Flex, GridItem, Heading, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useBoundStore } from '../stores/index';
import { Sfia } from '../types/types';

const Skill = (skillData: Sfia) => {
  const { addSelection, removeSelection, selectedSfia } = useBoundStore((state) => ({
    selectedSfia: state.selectedSfia,
    addSelection: state.addSelection,
    removeSelection: state.removeSelection,
  }));

  const [buttonLoading, setButtonLoading] = useState(false);

  const find = selectedSfia.find((skill) => skill.sfiaid === skillData.sfiaid) ? true : false;

  const selectSkill = (event) => {
    event.preventDefault();
    setButtonLoading(true);
    addSelection(skillData);
    setTimeout(() => {
      setButtonLoading(false);
    }, 1000);
  };

  const removeSkill = (event) => {
    event.preventDefault();
    setButtonLoading(true);
    removeSelection(skillData);
    setTimeout(() => {
      setButtonLoading(false);
    }, 1000);
  };

  return (
    <Link to={`/skills/${skillData.sfiaid}`}>
      <GridItem padding={1}>
        <Flex
          w="100%"
          _hover={{
            bg: find ? 'jamk.turquoiseJAMK' : 'jamk.magentaJAMK',
            textColor: 'white',
            rounded: 'md',
          }}
          padding={2}
          bgColor={find ? 'jamk.turquoiseJAMK' : 'white'}
          rounded={'md'}
          alignItems={'center'}
          justifyContent={'between'}
        >
          <Heading fontSize={'xl'}>{skillData.skill}</Heading>

          <Spacer />

          {find ? (
            <CloseIcon
              color={'jamk.magentaJAMK'}
              onClick={removeSkill}
              boxSize={'3rem'}
              _hover={{
                opacity: 0.8,
                pointerEvents: 'auto',
              }}
              zIndex={5}
            />
          ) : (
            <Button
              zIndex={5}
              isLoading={buttonLoading}
              bg={'jamk.turquoiseJAMK'}
              color={'white'}
              onClick={selectSkill}
              boxSize={'3rem'}
              _hover={{
                opacity: 0.8,
                textColor: 'black',
                rounded: 'md',
              }}
            >
              Select
            </Button>
          )}
        </Flex>
      </GridItem>
    </Link>
  );
};
export default Skill;
