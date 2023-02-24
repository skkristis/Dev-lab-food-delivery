import React from 'react';

import { Button } from '@chakra-ui/react';

import './RestOrdersNav.scss';

function RestOrdersNav({
  activeOrder,
  setActiveOrder,
  ordersSort,
  setOrdersSort,
}) {
  return (
    <div className="rest-orders__nav">
      {activeOrder ? (
        <Button
          variant="outline"
          colorScheme="green"
          size="lg"
          onClick={() => setActiveOrder(null)}
        >
          Back
        </Button>
      ) : (
        <>
          <Button
            variant={ordersSort === 'pending' ? 'solid' : 'outline'}
            colorScheme="green"
            size="lg"
            onClick={() => setOrdersSort('pending')}
          >
            Pending
          </Button>

          <Button
            variant={ordersSort === 'ready' ? 'solid' : 'outline'}
            colorScheme="green"
            size="lg"
            onClick={() => setOrdersSort('ready')}
          >
            Ready for delivery
          </Button>

          <Button
            variant={ordersSort === 'fulfilled' ? 'solid' : 'outline'}
            colorScheme="green"
            size="lg"
            onClick={() => setOrdersSort('fulfilled')}
          >
            History
          </Button>
        </>
      )}
    </div>
  );
}

export default RestOrdersNav;
