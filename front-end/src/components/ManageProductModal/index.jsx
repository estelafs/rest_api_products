/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  Textarea,
} from '@chakra-ui/react';
import { isEmpty } from 'lodash';
import { useState } from 'react';

const ManageProductModal = ({ setProducts, productToEdit, isOpen, onClose }) => {
  const [name, setName] = useState(productToEdit.name || '');
  const [description, setDescription] = useState(productToEdit.description || '');
  const [value, setValue] = useState(productToEdit.value || '');
  const productId = productToEdit.id;

  const addProduct = async () => {
    try {
      const productData = {
        name,
        description,
        value,
      };
      const response = await fetch('http://localhost:8000/api/products/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(productData)
        }
      );
      const data = await response.json();
      setProducts((previousData) => [...previousData, data]);
    } catch (err) {
      console.log(err);
      throw new Error('Erro ao tentar criar novo produto.');
    }
  };

  const updateProduct = async () => {
    try {
      const productData = {
        name,
        description,
        value,
      };
      const response = await fetch(`http://localhost:8000/api/products/${productId}/`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(productData)
        }
      );
      const data = await response.json();
      setProducts((previousData) =>
        previousData.map((product) => {
          if (product.id === productId) {
            return data;
          } else {
            return product;
          }
        })
      );
    } catch (err) {
      console.log(err);
      throw new Error('Erro ao tentar atualizar produto.');
    }
  };

  const onSave = () => {
    // Missing required fields
    if (!name || !value) return;

    if (!isEmpty(productToEdit)) {
      // Editing product
      updateProduct();
    } else {
      // Creating new product
      addProduct();
    }

    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{isEmpty(productToEdit) ? 'Cadastro' : 'Atualização'} de Produto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired display='flex' flexDir='column' gap={4}>
              <Box>
                <FormLabel>Nome</FormLabel>
                <Input
                  type='text'
                  value={name}
                  placeholder='Insira o nome do produto...'
                  onChange={(event) => setName(event.target.value)}
                />
              </Box>
              <Box>
                <FormLabel requiredIndicator='false'>Descrição</FormLabel>
                <Textarea
                  value={description}
                  placeholder='Insira a descrição...'
                  onChange={(event) => setDescription(event.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Valor</FormLabel>
                <Input
                  type='number'
                  value={value}
                  placeholder='Insira o valor...'
                  onChange={(event) => setValue(event.target.value)}
                />
              </Box>
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent='start'>
            <Button colorScheme='green' mr={3} isDisabled={!name || !value} onClick={onSave}>
              SALVAR
            </Button>
            <Button colorScheme='red' onClick={onClose}>
              CANCELAR
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ManageProductModal;
