import { useBoundStore } from '../../stores';
import { RankedSfia, RankedSoftSkill, SaveResultsType, SfiaBody, SoftSkillBody } from '../../types/types';
import { Container, Box, Flex, Text, Button, SimpleGrid } from '@chakra-ui/react';
import { saveResults } from '../../services/results';
import { useNavigate } from 'react-router-dom';
const Summary = () => {
  const navigate = useNavigate();
  const { selectedSoftSkills, selectedSfia, user, setNotification } = useBoundStore((state) => ({
    selectedSfia: state.selectedSfia,
    selectedSoftSkills: state.selectedSoftSkills,
    user: state.user,
    setNotification: state.setNotification,
  }));

  const submitResults = () => {
    const sfiaResults: SfiaBody[] = selectedSfia.map((sfia: RankedSfia) => {
      return {
        sfiaSkillId: sfia.id,
        result: sfia.result,
        hashkeyId: user.hashkeyId,
      };
    });
    const softSkillResults: SoftSkillBody[] = selectedSoftSkills.map((soft: RankedSoftSkill) => {
      return {
        softSkillId: soft.id,
        result: soft.result,
        hashkeyId: user.hashkeyId,
      };
    });

    const savedBody: SaveResultsType = {
      sfia: sfiaResults,
      soft: softSkillResults,
    };
    try {
      saveResults(savedBody);
      navigate('/thankyou');
    } catch (error) {
      setNotification({
        errorType: 'error',
        displayTime: 5000,
        message: 'Something went wrong, please try again later',
      });
    }
  };

  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={4} mt={8}>
        <Box mr="4">
          <Box bg="jamk.magentaJAMK" p="2" color="white" rounded="md" boxShadow="0 0 8px rgba(0, 0, 0, 0.4)">
            <Text fontWeight="bold" fontSize="2xl" mb="2">
              Selected SFIA Skills
            </Text>
          </Box>
          <SimpleGrid columns={1} spacing={4} mt={10}>
            {selectedSfia.map((sfia) => (
              <Box
                key={sfia.id}
                bg="white"
                p={4}
                rounded="md"
                border="2px solid jamk.blueJAMK"
                boxShadow="0 0 8px rgba(0, 0, 255, 0.4)"
              >
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  {sfia.skill}
                </Text>
                <Text>({sfia.result})</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Box>
          <Box bg="jamk.magentaJAMK" p="2" color="white" rounded="md" boxShadow="0 0 8px rgba(0, 0, 0, 0.4)">
            <Text fontWeight="bold" fontSize="2xl" mb="2">
              Selected Soft Skills
            </Text>
          </Box>
          <SimpleGrid columns={1} spacing={4} mt={10}>
            {selectedSoftSkills.map((soft) => (
              <Box
                key={soft.id}
                bg="white"
                p={4}
                rounded="md"
                border="2px solid jamk.blueJAMK"
                boxShadow="0 0 8px rgba(0, 0, 255, 0.4)"
              >
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  {soft.softSkill}
                </Text>
                <Text>({soft.result})</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </SimpleGrid>

      <Flex justify="flex-end">
        <Button
          bg="jamk.magentaJAMK"
          color="white"
          size="lg"
          onClick={() => submitResults()}
          _hover={{
            bg: 'white',
            color: 'jamk.magentaJAMK',
            borderColor: 'jamk.magentaJAMK',
            borderWidth: '1px',
          }}
        >
          Submit
        </Button>
      </Flex>
    </Container>
  );
};

export default Summary;
