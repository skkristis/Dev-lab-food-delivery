import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useMediaQuery } from '@chakra-ui/media-query';
import './index.scss';

function FilterByCategory({ items, bgColor, categoryId }) {
  const [smallerScreen] = useMediaQuery('(max-width: 750px)');
  return (
    <>
      <Flex alignItems="center" justifyContent="center">
        {categoryId && smallerScreen ? (
          <Button
            variant="ghost"
            onClick={() => {
              const container = document.querySelector(`#${categoryId}`);
              container.scrollLeft -= 80;
            }}
          >
            <ChevronLeftIcon />
          </Button>
        ) : (
          <></>
        )}
        <Flex backgroundColor={bgColor} className="category" id={categoryId}>
          {items.map((item, index) => (
            <Button
              borderRadius="lg"
              bg="white"
              key={index}
              p={3}
              display="block"
              minWidth="fit-content"
            >
              {item}
            </Button>
          ))}
        </Flex>

        {categoryId && smallerScreen ? (
          <Button
            variant="ghost"
            onClick={() => {
              const container = document.querySelector(`#${categoryId}`);
              container.scrollLeft += 80;
            }}
          >
            <ChevronRightIcon />
          </Button>
        ) : (
          <></>
        )}
      </Flex>
    </>
  );
}

export default FilterByCategory;
