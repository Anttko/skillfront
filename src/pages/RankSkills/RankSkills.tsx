import { useBoundStore } from '../../stores/index';
import RankSkill from '../../components/RankSkill';
import { RankedSfia } from '../../types/types';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Card,
  CardHeader,
  CardBody,
  ListItem,
  UnorderedList,
  Stack,
} from '@chakra-ui/react';

const RankSkills = () => {
  const { selectedSfia, countValuable, countFuture, countImportant, countMoreValuable } = useBoundStore((state) => ({
    selectedSfia: state.selectedSfia,
    countValuable: state.countValuable,
    countMoreValuable: state.countMoreValuable,
    countImportant: state.countImportant,
    countFuture: state.countFuture,
  }));

  return (
    <Box w={'100%'} p={3}>
      <Card align="center" mt={10} mb={4} bgColor={'jamk.magentaJAMK'} textColor={'white'}>
        <CardHeader>
          <Heading as="h1" size="xl">
            Ranking your SFIA skills
          </Heading>
        </CardHeader>
        <CardBody>
          <UnorderedList>
            <ListItem>Select 5 valuable skills</ListItem>
            <ListItem>Select 5 more valuable skills</ListItem>
            <ListItem>Select 5 important skills</ListItem>
            <ListItem>Select 5 future skills</ListItem>
          </UnorderedList>
        </CardBody>
      </Card>

      <Card p={4} borderWidth={1} borderRadius="md" boxShadow="md">
        <Stack direction={['column', 'row']} spacing="24px">
          <Box flex="1">
            <Stat>
              <StatLabel>Valuable</StatLabel>
              <StatNumber>{countValuable}</StatNumber>
            </Stat>
          </Box>
          <Box flex="1">
            <Stat>
              <StatLabel>More valuable</StatLabel>
              <StatNumber>{countMoreValuable}</StatNumber>
            </Stat>
          </Box>
          <Box flex="1">
            <Stat>
              <StatLabel>Important</StatLabel>
              <StatNumber>{countImportant}</StatNumber>
            </Stat>
          </Box>
          <Box flex="1">
            <Stat>
              <StatLabel>Future</StatLabel>
              <StatNumber>{countFuture}</StatNumber>
            </Stat>
          </Box>
        </Stack>
      </Card>
      <SimpleGrid columns={{ base: 1, lg: 3 }} gap={4} mt={8}>
        {selectedSfia.map((skill: RankedSfia, index: number) => (
          <RankSkill key={index} item={skill} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default RankSkills;
