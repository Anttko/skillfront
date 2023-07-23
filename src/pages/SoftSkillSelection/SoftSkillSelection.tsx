import { useBoundStore } from '../../stores/index';
import { Container, Accordion, Box, Heading, Text, Flex, Card, CardHeader, CardBody } from '@chakra-ui/react';
import { RankedSoftSkill, SoftSkill } from '../../types/types';
import SoftSkillView from '../../components/SoftSkillView';
import { getAll } from '../../services/softService';
import { useQuery } from 'react-query';
import { MAX_SOFT_SKILLS } from '../../utils/values';

const SoftSkillSelection = () => {
  const { selectedSoftSkills } = useBoundStore((state) => ({
    selectedSoftSkills: state.selectedSoftSkills,
  }));
  const { data, isLoading, isError } = useQuery('allSoftSkills', () => getAll());
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  const allSoftSkills = data as SoftSkill[];

  return (
    <>
      <Box w="100%" h={'100vh'}>
        <Flex align="center" justify={'center'} my={10}>
          <Card>
            <CardHeader>
              <Heading>Select soft skills</Heading>
            </CardHeader>
            <CardBody>
              <Heading size={'sm'}>
                Currenty selected: {selectedSoftSkills.length} / {MAX_SOFT_SKILLS}
              </Heading>

              {selectedSoftSkills.map((skill: RankedSoftSkill, A: number | string) => (
                <Text key={A}>
                  {skill.softSkill} : {skill.result}
                </Text>
              ))}
            </CardBody>
          </Card>
        </Flex>
        <Container maxW="container.xl">
          <Accordion>
            {allSoftSkills.map((skill: SoftSkill) => (
              <SoftSkillView skill={skill} key={skill.id} />
            ))}
          </Accordion>
        </Container>
      </Box>
    </>
  );
};
export default SoftSkillSelection;
