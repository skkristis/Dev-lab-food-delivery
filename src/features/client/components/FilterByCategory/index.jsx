import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import './index.scss';
import ScrollButton from '../ScrollButton';

function FilterByCategory({ items, bgColor, categoryId }) {
  const [smallerScreen] = useMediaQuery('(max-width: 750px)');
  return (
    <Flex alignItems="center" justifyContent="center">
      {categoryId && smallerScreen && (
        <ScrollButton
          rightButton={false}
          variant="ghost"
          id={`#${categoryId}`}
        />
      )}
      <Flex backgroundColor={bgColor} className="category" id={categoryId}>
        {items.map((item) => (
          <Button
            borderRadius="lg"
            bg="white"
            key={item.name}
            p={3}
            display="block"
            minWidth="fit-content"
          >
            {item.icon}
            {item.name}
          </Button>
        ))}
      </Flex>

      {categoryId && smallerScreen && (
        <ScrollButton
          rightButton={true}
          variant="ghost"
          id={`#${categoryId}`}
        />
      )}
    </Flex>
  );
}

export default FilterByCategory;
