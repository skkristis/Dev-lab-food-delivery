import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useMediaQuery } from '@chakra-ui/media-query';

import React from 'react';

import './index.scss';

function FilterByCategory({ items, bgColor, categoryId, justify }) {
  const [smallerScreen] = useMediaQuery('(max-width: 750px)');
  return (
    <>
      {smallerScreen ? (
        <Flex justifyContent="center">
          {categoryId && smallerScreen ? (
            <Button
              variant="ghost"
              onClick={() => {
                const container = document.querySelector(`#${categoryId}`);
                container.scrollLeft -= 80;
              }}
              ml="auto"
              mt={5}
              float="left"
            >
              <ChevronLeftIcon />
            </Button>
          ) : (
            <></>
          )}
          <Flex
            direction="row"
            justifyContent="space-between"
            backgroundColor={bgColor}
            p={4}
            className="category"
            id={categoryId}
          >
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
              ml="auto"
              mt={5}
            >
              <ChevronRightIcon />
            </Button>
          ) : (
            <></>
          )}
        </Flex>
      ) : (
        <Flex
          direction="row"
          justifyContent={justify}
          backgroundColor={bgColor}
          p={4}
          className="category"
          id={categoryId}
        >
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
      )}
    </>
  );
}

export default FilterByCategory;
