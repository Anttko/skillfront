import { useEffect, useState } from 'react';
import { Sfia, SfiaRank } from '../types/types';
import { CheckboxGroup, Checkbox, Stack, Box, Heading, Card } from '@chakra-ui/react';
import { useBoundStore } from '../stores';

type skillProps = {
  item: Sfia;
};

const values: SfiaRank[] = ['valuable', 'more valuable', 'important', 'future'];

const RankSkill = ({ item }: skillProps): JSX.Element => {
  const { rankSfiaSelection, selectedSfia } = useBoundStore((state) => ({
    rankSfiaSelection: state.rankSfiaSelection,
    selectedSfia: state.selectedSfia,
  }));

  const [checkboxValues, setCheckboxValues] = useState([]);

  const findSkill = selectedSfia.find((selectedSkill) => selectedSkill.id === item.id);
  useEffect(() => {
    if (findSkill.result) {
      setCheckboxValues([findSkill.result]);
    }
  }, [findSkill.result]);

  const handleCheckboxChange = (checkedValue: SfiaRank) => {
    setCheckboxValues([checkedValue]);
    rankSfiaSelection(item, checkedValue);
    console.log(checkedValue);
  };

  return (
    <Card
      borderWidth={1}
      p={2}
      textColor={'jamk.blueJAMK'}
      padding={5}
      boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
      transition="0.3s"
      _hover={{ boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)' }}
      rounded="md"
    >
      <Box minW={'100%'} display={{ base: '', sm: 'row' }} mb={3}>
        <Heading size={'lg'} textColor={'jamk.blueJAMK'}>
          {' '}
          {item.skill}
        </Heading>
      </Box>
      <Box display={{ base: '', sm: 'row' }}>
        <CheckboxGroup colorScheme="green" value={checkboxValues}>
          <Stack spacing={[1, 5]} direction={'column'} textColor={'jamk.blueJAMK'}>
            {values.map((value, key) => (
              <CheckBoxChecker value={value} func={handleCheckboxChange} key={key} />
            ))}
          </Stack>
        </CheckboxGroup>
      </Box>
    </Card>
  );
};

type CheckBoxProps = {
  value: SfiaRank;
  func: (checkedValue: SfiaRank) => void;
};

export const CheckBoxChecker = ({ value, func }: CheckBoxProps): JSX.Element => {
  const { countValuable, countMoreValuable, countFuture, countImportant } = useBoundStore((state) => ({
    countValuable: state.countValuable,
    countMoreValuable: state.countMoreValuable,
    countImportant: state.countImportant,
    countFuture: state.countFuture,
  }));
  const [disabledCheckBox, setDisabledCheckbox] = useState(false);

  useEffect(() => {
    if (value === 'valuable' && countValuable >= 5) {
      setDisabledCheckbox(true);
    } else if (value === 'more valuable' && countMoreValuable >= 5) {
      setDisabledCheckbox(true);
    } else if (value === 'important' && countImportant >= 5) {
      setDisabledCheckbox(true);
    } else if (value === 'future' && countFuture >= 5) {
      setDisabledCheckbox(true);
    } else {
      setDisabledCheckbox(false);
    }
  }, [countValuable, countMoreValuable, countImportant, countFuture, value]);

  return (
    <>
      <Checkbox
        disabled={disabledCheckBox}
        size={'lg'}
        value={value}
        onChange={() => func(value)}
        fontSize={{ base: 'sm', sm: 'lg' }}
        color="black"
        border={'black'}
      >
        {value}
      </Checkbox>
    </>
  );
};
export default RankSkill;
