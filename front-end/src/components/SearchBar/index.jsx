/* eslint-disable react/prop-types */
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  IconButton,
} from '@chakra-ui/react';
import { Search2Icon, CloseIcon } from '@chakra-ui/icons';
import { isEmpty } from 'lodash';

const SearchBar = ({ setSearchValue, searchValue, setFilteredProducts }) => {

  const searchInProducts = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/products/?search=${searchValue}`);
      const data = await response.json();
      setFilteredProducts({ filterActive: true, data });
    } catch (err) {
      console.log(err);
      throw new Error('Erro ao buscar por produtos.');
    }
  };

  const handleChange = (event) => setSearchValue(event.target.value);

  return (
    <>
      <InputGroup borderRadius={5} size='md' my='5'>
        <InputLeftElement
          pointerEvents='none'
          color='gray.300'
          children={<Search2Icon color='gray.600' />}
        />
        <Input
          value={searchValue}
          onChange={handleChange}
          type='text'
          placeholder='Buscar por produto...'
          border='1px solid #949494'
          onKeyPress={event => {
            if (event.key === 'Enter') {
              searchInProducts()
            }
          }}
        />
        <InputRightAddon
          p={0}
          border='none'
        >
          <IconButton
            colorScheme='blue'
            fontSize='20px'
            onClick={() => setFilteredProducts({ filterActive: false, data: [] })}
            icon={<CloseIcon />}
            borderLeftRadius={0}
            borderRightRadius={0}
          />
          <Button 
            size='md'
            colorScheme='blue'
            isDisabled={isEmpty(searchValue)}
            onClick={searchInProducts}
            borderLeftRadius={0}
            borderRightRadius={3.3}
          >
            BUSCAR
          </Button>
        </InputRightAddon>
      </InputGroup>
    </>
  );
};

export default SearchBar;
