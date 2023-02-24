import React from 'react';

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from '@chakra-ui/react';

import './CouriersStats.scss';

import courier from '../../mocks/courier';

function CouriersStats() {
  const partnerDate = new Date(courier.registrationDate).toLocaleString(
    'default',
    {
      dateStyle: 'medium',
    }
  );

  let currentMonth = new Date(Date.now()).toLocaleString('default', {
    month: 'long',
  });

  return (
    <div className="couriers-stats">
      <Stat
        className="couriers-stats__block"
        borderWidth="1px"
        borderRadius="lg"
      >
        <StatLabel>Total orders delivered</StatLabel>
        <StatNumber>{courier.stats.orders.total}</StatNumber>
        <StatHelpText>Partner since {partnerDate}</StatHelpText>
      </Stat>

      <Stat
        className="couriers-stats__block"
        borderWidth="1px"
        borderRadius="lg"
      >
        <StatLabel>Delivered in {currentMonth}</StatLabel>
        <StatNumber>{courier.stats.orders.month}</StatNumber>
        <StatHelpText>
          <StatArrow
            type={
              courier.stats.orders.monthIncrease > 0 ? 'increase' : 'decrease'
            }
          />
          {courier.stats.orders.monthIncrease}%
        </StatHelpText>
      </Stat>

      <Stat
        className="couriers-stats__block"
        borderWidth="1px"
        borderRadius="lg"
      >
        <StatLabel>Total revenue</StatLabel>
        <StatNumber>{courier.stats.revenue.total} EUR</StatNumber>
        <StatHelpText>Partner since {partnerDate}</StatHelpText>
      </Stat>

      <Stat
        className="couriers-stats__block"
        borderWidth="1px"
        borderRadius="lg"
      >
        <StatLabel>Revenue in {currentMonth}</StatLabel>
        <StatNumber>{courier.stats.revenue.month} EUR</StatNumber>
        <StatHelpText>
          <StatArrow
            type={
              courier.stats.revenue.monthIncrease > 0 ? 'increase' : 'decrease'
            }
          />
          {courier.stats.revenue.monthIncrease}%
        </StatHelpText>
      </Stat>
    </div>
  );
}

export default CouriersStats;
