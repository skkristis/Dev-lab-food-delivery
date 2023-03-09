import { RadioGroup, Radio } from '@chakra-ui/radio';
import { Stack } from '@chakra-ui/layout';
import SwedbankUrl from '../../../../assets/swedbank-icon.png';
import PayseraUrl from '../../../../assets/paysera-icon.png';
import CashUrl from '../../../../assets/cash-icon.svg';
import { Image } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/layout';

function RadioButtonsForPayment({ payMethod, setStateFn, options }) {
  const handleClick = (value) => {
    setStateFn(value);
  };

  const renderImage = (paymentMethod) => {
    switch (paymentMethod) {
      case 'Swedbank':
        return (
          <Image
            src={SwedbankUrl}
            width="50px"
            maxHeight="35px"
            objectFit="contain"
          />
        );
      case 'PaySera':
        return (
          <Image
            src={PayseraUrl}
            width="50px"
            objectFit="contain"
            maxHeight="35px"
          />
        );
      case 'Cash':
        return <Image src={CashUrl} width="50px" maxHeight="35px" />;
      default:
        return null;
    }
  };
  return (
    <RadioGroup defaultValue={payMethod}>
      <Stack spacing={5} direction="column">
        {options?.map((paymentMethod) => {
          return (
            <Radio
              variant="outline"
              key={paymentMethod}
              onChange={() => handleClick(paymentMethod)}
              value={paymentMethod}
            >
              <Flex gap={1} alignItems="center">
                {renderImage(paymentMethod)}
                {paymentMethod}
              </Flex>
            </Radio>
          );
        })}
      </Stack>
    </RadioGroup>
  );
}

export default RadioButtonsForPayment;
