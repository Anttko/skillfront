import { CloseIcon, Search2Icon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';

type SearchBarProps = {
  setSearch: (search: string) => void;
  search: string;
};
const SearchBar = ({ setSearch, search }: SearchBarProps): JSX.Element => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <InputGroup marginTop={2} position="sticky" top={0} zIndex="10" bg={'white'}>
      <InputLeftElement pointerEvents="none">
        <Search2Icon color="black.400" />
      </InputLeftElement>
      <Input
        textColor={'black'}
        id="searchInput"
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search for a skill"
      />
      <InputRightElement>{search ? <CloseIcon onClick={() => setSearch('')} /> : null}</InputRightElement>
    </InputGroup>
  );
};
export default SearchBar;
