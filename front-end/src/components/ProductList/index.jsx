/* eslint-disable react/prop-types */
import {
  Box,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

const ProductList = ({ setProducts, products, onOpen, setDataEdit }) => {

  const onDelete = async (productId) => {
    try {
      await fetch(
        `http://localhost:8000/api/products/${productId}/`,
        {
          method: 'DELETE'
        }
      );
      setProducts((previousData) =>
        previousData.filter((product) => product.id !== productId)
      );
    } catch (err) {
      console.log(err);
      throw new Error('Erro ao tentar deletar produto.');
    }
  };

  return (
    <Box overflowY='auto' height='100%'>
      <Table mt='6'>
        <Thead>
          <Tr>
            <Th fontSize='20px'> Nome </Th>
            <Th fontSize='20px'> Descrição </Th>
            <Th fontSize='20px'> Valor </Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map(({ id, name, description, value }) => (
            <Tr cursor='default' key={id} _hover={{ bg: 'gray.100' }}>
              <Td>{name}</Td>
              <Td>{description}</Td>
              <Td>{value}</Td>
              <Td p={0}>
                <EditIcon
                  cursor='pointer'
                  color="blue.500"
                  fontSize={20}
                  onClick={() => [
                    setDataEdit({ id, name, description, value }),
                    onOpen(),
                  ]}
                />
              </Td>
              <Td p={0}>
                <DeleteIcon
                  cursor='pointer'
                  color="red.500"
                  fontSize={20}
                  onClick={() => onDelete(id)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ProductList;
