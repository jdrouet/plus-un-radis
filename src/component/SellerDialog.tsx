import React, { useCallback } from 'react';
import { Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core';
import { Seller } from '../model/seller';
import { getUrlToAddress } from '../service/navigation';

export type SellerDialogProps = {
  seller?: Seller;
  onClose: () => any;
};

const SellerDialog: React.FC<SellerDialogProps> = function({ seller, onClose }) {
  const handleNavigate = useCallback(() => {
    if (!seller) return;
    window.open(getUrlToAddress(seller), '_blank');
  }, [seller]);
  return (
    <Dialog open={!!seller} onClose={onClose}>
      <DialogTitle>{seller?.name || ''}</DialogTitle>
      <DialogActions>
        <Button color="primary" onClick={handleNavigate}>
          Y aller
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SellerDialog;
