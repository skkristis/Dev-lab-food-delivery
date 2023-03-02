import { Button } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

function ScrollButton({ rightButton, id, ...rest }) {
  const container = document.querySelector(`${id}`);
  return (
    <Button
      {...rest}
      zIndex={4}
      onClick={() => {
        {
          rightButton
            ? (container.scrollLeft += 160)
            : (container.scrollLeft -= 160);
        }
      }}
    >
      {rightButton ? <ChevronRightIcon /> : <ChevronLeftIcon />}
    </Button>
  );
}

export default ScrollButton;
