import { ChangeEvent, useEffect, useState } from 'react';
import { SoftRank, RankedSoftSkill } from '../types/types';
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Radio,
  RadioGroup,
  Stack,
  Button,
  Heading,
} from '@chakra-ui/react';
import { useBoundStore } from '../stores';

type SoftSkillProps = {
  skill: RankedSoftSkill;
};
const values: SoftRank[] = ['valuable', 'more valuable', 'important'];
const SoftSkillView = ({ skill }: SoftSkillProps): JSX.Element => {
  const { addSoftSelection, selectedSoftSkills, removeSoftSelection, setNotification } = useBoundStore((state) => ({
    addSoftSelection: state.addSoftSelection,
    selectedSoftSkills: state.selectedSoftSkills,
    removeSoftSelection: state.removeSoftSelection,
    setNotification: state.setNotification,
  }));

  const findSkillIndex = selectedSoftSkills.findIndex((selectedSkill) => selectedSkill.id === skill.id);
  const findSkill = selectedSoftSkills[findSkillIndex];
  const [softSkillResult, setSoftSkillResult] = useState<SoftRank | ''>(findSkill ? findSkill.result : '');
  useEffect(() => {
    if (findSkill) {
      setSoftSkillResult(findSkill.result);
    }
  }, []);
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (selectedSoftSkills.length === 3 && !findSkill) {
      return setNotification({
        displayTime: 3000,
        message: 'You can only select 3 soft skills',
        errorType: 'error',
      });
    }
    const value = e.target.value as SoftRank;
    setSoftSkillResult(value === softSkillResult ? '' : value);
    const softSkillValue = { ...skill, result: value };
    value === softSkillResult ? removeSoftSelection(skill) : addSoftSelection(softSkillValue);
  };

  const resetSelection = (event) => {
    event.preventDefault();
    setSoftSkillResult('');
    removeSoftSelection(skill);
  };

  return (
    <AccordionItem>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          <Heading>{skill.softSkill}</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>{skill.description}</AccordionPanel>
      <RadioGroup value={softSkillResult}>
        <Stack direction="row">
          {values.map((value, key) => (
            <Radio
            
            
            key={key} value={value}
            
            colorScheme="red" 
            size="lg" onChange={(e) => handleCheckboxChange(e)}>
              {value}
            </Radio>
          ))}
          {findSkill && (
            <Button
              _hover={{
                opacity: 0.8,
              }}
              bgColor={'jamk.magentaJAMK'}
              textColor={'white'}
              p={2}
              onClick={resetSelection}
            >
              reset
            </Button>
          )}
        </Stack>
      </RadioGroup>
    </AccordionItem>
  );
};
export default SoftSkillView;
