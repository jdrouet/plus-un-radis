import React, { useCallback } from 'react';
import { Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core';
import { Producer } from '../model/producer';
import { getUrlToAddress } from '../service/navigation';

export type ProducerDialogProps = {
  producer?: Producer;
  onClose: () => any;
};

const ProducerDialog: React.FC<ProducerDialogProps> = function({ producer, onClose }) {
  const handleNavigate = useCallback(() => {
    if (!producer) return;
    window.open(getUrlToAddress(producer), '_blank');
  }, [producer]);
  return (
    <Dialog open={!!producer} onClose={onClose}>
      <DialogTitle>{producer?.name || ''}</DialogTitle>
      <DialogActions>
        <Button color="primary" onClick={handleNavigate}>
          Y aller
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProducerDialog;
