import { Outlet } from 'react-router-dom';
import { Sfia } from '../../types/types';
import SearchBar from '../../components/SearchBar';
import Skill from '../../components/Skill';
import { Grid, Box, GridItem } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getAll } from '../../services/sfiaService';
import useDebounce from '../../hooks/useDebounce';
import { useState } from 'react';
const SkillSelection = () => {
  const [search, setSearch] = useState<string>('');
  const debouncedSearchTerm = useDebounce(search, 500);
  const { data, isLoading, isError } = useGetSfia(debouncedSearchTerm);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <Box>
      <Box w={'100%'} bg={'white'}>
        <Grid templateColumns={'repeat(4, 1fr'} gap={2} minH="100vh">
          <GridItem
            colStart={1}
            colSpan={1}
            overflowY="auto"
            maxHeight={'100vh'}
            minHeight={'100vh'}
            gap={2}
            minW={'30vw'}
          >
            <SearchBar setSearch={setSearch} search={search} />
            {data.map((skill: Sfia, A: number | string) => (
              <Skill {...skill} key={A} />
            ))}
          </GridItem>
          <GridItem colStart={[1, 2]} rowStart={[1, 1]} colSpan={1} bg="gray.300" minW={'50vw'}>
            <Outlet />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

const useGetSfia = (filter: string) => {
  return useQuery(['allSfiaSkills'], () => getAll(), {
    select: (allSfia) =>
      filter
        ? allSfia.filter((sfia) => {
            return sfia.keywords.some((keyword) => {
              return keyword.toLowerCase().includes(filter.toLowerCase());
            });
          })
        : allSfia,
  });
};

export default SkillSelection;
