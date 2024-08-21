import { Heading, Highlight } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const EmptyIndicator = ({ element }) => {
  const text = `Nenhum ${element} foi encontrado :(`;

  return (
    <Heading  as='h4' size='md' textAlign='center' mt='10'>
      <Highlight
        query=':('
        styles={{ px: '2', py: '1', rounded: 'full', bg: 'blue.100' }}
      >
        {text}
      </Highlight>
    </Heading>
  );
};

EmptyIndicator.propTypes = {
  element: PropTypes.string.isRequired
}

export default EmptyIndicator;
