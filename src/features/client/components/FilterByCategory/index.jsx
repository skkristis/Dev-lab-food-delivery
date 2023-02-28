import { Stack, Box } from '@chakra-ui/layout';

import './index.scss';

function FilterByCategory({ items, bgColor }) {
  return (
    <>
      <Stack
        direction="row"
        justify="space-between"
        backgroundColor={bgColor}
        p={4}
      >
        {items.map((item, index) => (
          <Box
            as="button"
            borderRadius="lg"
            bg="white"
            px={7}
            h={7}
            key={index}
          >
            {item}
          </Box>
        ))}
      </Stack>
    </>
  );
}

export default FilterByCategory;
