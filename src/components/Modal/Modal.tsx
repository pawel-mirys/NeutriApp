import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from 'tw-elements-react';
import { Button } from '@mui/material';

type ModalProps = {
  triggerButtonTitle: string;
  modalTitle: string;
  modalContent: string | JSX.Element | JSX.Element[];
  closeButtonText: string;
  submitButtonText: string;
  onSubmit: () => void;
};

const Modal: React.FC<ModalProps> = ({
  triggerButtonTitle,
  modalTitle,
  modalContent,
  closeButtonText,
  submitButtonText,
  onSubmit,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalSubmit = () => {
    onSubmit();
  };

  return (
    <div>
      <TERipple rippleColor='white'>
        <Button
          color='inherit'
          variant='text'
          onClick={() => {
            setShowModal(true);
          }}>
          {triggerButtonTitle}
        </Button>
      </TERipple>
      <TEModal show={showModal} setShow={setShowModal}>
        <TEModalDialog>
          <TEModalContent>
            <TEModalHeader>
              <h5 className='text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200'>
                {modalTitle}
              </h5>
              <button
                type='button'
                className='box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none'
                onClick={() => setShowModal(false)}
                aria-label='Close'>
                <CloseIcon sx={{ color: 'black' }} />
              </button>
            </TEModalHeader>
            <TEModalBody>{modalContent}</TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor='light'>
                <button
                  type='button'
                  className='inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200'
                  onClick={() => setShowModal(false)}>
                  {closeButtonText}
                </button>
              </TERipple>
              <TERipple rippleColor='light'>
                <button
                  onClick={() => {
                    handleModalSubmit();
                    setShowModal(false);
                  }}
                  type='button'
                  className='ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
                  {submitButtonText}
                </button>
              </TERipple>
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
  );
};

export default Modal;
