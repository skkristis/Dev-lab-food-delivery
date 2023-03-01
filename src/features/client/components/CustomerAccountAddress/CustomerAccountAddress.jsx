import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeAddress } from '../../../../store/reducers/customerReducer';

import { Button } from '@chakra-ui/react';
import CustomerAccountAddressList from '../CustomerAccountAddressList/CustomerAccountAddressList';
import CustomerAccountAddressForm from '../CustomerAccountAddressForm/CustomerAccountAddressForm';

import './CustomerAccountAddress.scss';

function CustomerAccountAddress({ customer }) {
  const [activeAddress, setActiveAddress] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch();
  const dispatchRemove = (address) => dispatch(removeAddress(address));

  const handleBackClick = () => {
    setActiveAddress(null);
    setShowForm(false);
  };

  const handleRemove = () => {
    dispatchRemove(activeAddress.id);
    setActiveAddress(null);
    setShowForm(false);
  };

  return (
    <div className="customer-address">
      <div className="customer-address__nav">
        {showForm && (
          <Button
            variant="outline"
            colorScheme="blue"
            size="lg"
            onClick={handleBackClick}
          >
            Back
          </Button>
        )}

        {showForm && activeAddress && (
          <Button
            variant="outline"
            colorScheme="red"
            size="lg"
            onClick={handleRemove}
          >
            Remove
          </Button>
        )}
      </div>

      {activeAddress || showForm ? (
        <CustomerAccountAddressForm
          address={activeAddress}
          setActiveAddress={setActiveAddress}
          setShowForm={setShowForm}
        />
      ) : (
        <CustomerAccountAddressList
          addressList={customer.addressBook}
          setActiveAddress={setActiveAddress}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
}

export default CustomerAccountAddress;
