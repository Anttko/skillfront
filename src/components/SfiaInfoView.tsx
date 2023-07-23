import {
  Box,
  Text,
  Heading,
  Tab,
  TabList,
  Tabs,
  TabPanel,
  TabPanels,
  Link,
  Container,
  Spinner,
} from '@chakra-ui/react';
import { Sfia } from '../types/types';
import { useParams } from 'react-router-dom';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { useQuery } from 'react-query';
import { getOne } from '../services/sfiaService';
const SfiaInfoView = () => {
  // eslint-disable-next-line prefer-const
  const { sfiaId } = useParams();

  const { data, isLoading, isError } = useQuery(['sfia', sfiaId], () => getOne(sfiaId));

  const sfia = data as Sfia;

  if (isLoading) return <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />;
  if (isError) return <div>Error</div>;

  const linkValue = 'https://sfia-online.org/en/sfia-8/skills/' + sfia.skill.replace(/ /g, '-').toLowerCase();

  return (
    <Box>
      <Container maxW={'container.lg'} overflow={'hidden'}>
        <Heading>{sfia.skill}</Heading>
        <Heading>{sfia.category}</Heading>
        <Heading>{sfia.subcategory}</Heading>
        <Text>{sfia.guidancenotes}</Text>
        <Text>{sfia.overalldescription}</Text>

        <Tabs isLazy variant={'soft-rounded'} colorScheme={'green'} p={2}>
          <Heading size={'md'} p={2}>
            Levels
          </Heading>
          <TabList fontSize={['sm, xl']}>
            {/* levels=1 levels3=4 they are like that in the sfia excel*/}
            <Tab isDisabled={sfia.levels === ''}>1</Tab>
            <Tab isDisabled={sfia.level1 === ''}> 2</Tab>
            <Tab isDisabled={sfia.level2 === ''}> 3</Tab>
            <Tab isDisabled={sfia.level3 === ''}> 4</Tab>
            <Tab isDisabled={sfia.level5 === ''}> 5</Tab>
            <Tab isDisabled={sfia.level6 === ''}> 6</Tab>
            <Tab isDisabled={sfia.level7 === ''}> 7</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{sfia.level1description}</TabPanel>
            <TabPanel>{sfia.level2description}</TabPanel>
            <TabPanel>{sfia.level3description}</TabPanel>
            <TabPanel>{sfia.level4description}</TabPanel>
            <TabPanel>{sfia.level5description}</TabPanel>
            <TabPanel>{sfia.level6description}</TabPanel>
            <TabPanel>{sfia.level7description}</TabPanel>
          </TabPanels>
        </Tabs>
        <Text>
          <Link href={linkValue} isExternal>
            {sfia.skill} in sfia-online.org
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Text>
      </Container>
    </Box>
  );
};
export default SfiaInfoView;
