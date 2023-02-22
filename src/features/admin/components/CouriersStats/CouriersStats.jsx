import React from 'react';

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from '@chakra-ui/react';

import './CouriersStats.scss';

import user from '../../mocks/user';

function CouriersStats() {
  const partnerDate = new Date(user.registrationDate).toLocaleString(
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
        <StatNumber>{user.stats.orders.total}</StatNumber>
        <StatHelpText>Partner since {partnerDate}</StatHelpText>
      </Stat>

      <Stat
        className="couriers-stats__block"
        borderWidth="1px"
        borderRadius="lg"
      >
        <StatLabel>Delivered in {currentMonth}</StatLabel>
        <StatNumber>{user.stats.orders.month}</StatNumber>
        <StatHelpText>
          <StatArrow
            type={user.stats.orders.monthIncrease > 0 ? 'increase' : 'decrease'}
          />
          {user.stats.orders.monthIncrease}%
        </StatHelpText>
      </Stat>

      <Stat
        className="couriers-stats__block"
        borderWidth="1px"
        borderRadius="lg"
      >
        <StatLabel>Total revenue</StatLabel>
        <StatNumber>{user.stats.revenue.total} EUR</StatNumber>
        <StatHelpText>Partner since {partnerDate}</StatHelpText>
      </Stat>

      <Stat
        className="couriers-stats__block"
        borderWidth="1px"
        borderRadius="lg"
      >
        <StatLabel>Revenue in {currentMonth}</StatLabel>
        <StatNumber>{user.stats.revenue.month} EUR</StatNumber>
        <StatHelpText>
          <StatArrow
            type={
              user.stats.revenue.monthIncrease > 0 ? 'increase' : 'decrease'
            }
          />
          {user.stats.revenue.monthIncrease}%
        </StatHelpText>
      </Stat>
    </div>
  );
}

export default CouriersStats;
