import { Box, Button, Image } from '@chakra-ui/react';

function MerchantTypeButton({
  item,
  index,
  activeMerchantTypeIndex,
  handleCategoryTypeClick,
}) {
  return (
    <Button
      borderRadius="lg"
      display="flex"
      alignItems="center"
      gap="5px"
      minWidth="fit-content"
      fontSize="20px"
      onClick={() => handleCategoryTypeClick(item.id, item.name, index)}
      color={index === activeMerchantTypeIndex ? 'white' : 'black'}
      colorScheme={index === activeMerchantTypeIndex ? 'blue' : 'white'}
      isDisabled={index === activeMerchantTypeIndex}
      opacity="1 !important"
      cursor="pointer !important"
    >
      <Box maxW="20px" display="inline-block">
        <Image src={item.thumbnail} />
      </Box>
      {item.name}
    </Button>
  );
}

export default MerchantTypeButton;
