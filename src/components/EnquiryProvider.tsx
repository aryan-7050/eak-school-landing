
import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react';
import { Modal } from './Modal';
import { EnquiryForm } from './EnquiryForm';

type EnquiryContextValue = {
  openEnquiry: () => void;
  closeEnquiry: () => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);

  if (!ctx) {
    throw new Error('useEnquiry must be used within EnquiryProvider');
  }

  return ctx;
}

export function EnquiryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const openEnquiry = useCallback(() => setOpen(true), []);
  const closeEnquiry = useCallback(() => setOpen(false), []);

  const handleFormSubmitSuccess = useCallback(() => {
    setTimeout(() => {
      closeEnquiry();
    }, 2000);
  }, [closeEnquiry]);

  return (
    <EnquiryContext.Provider value={{ openEnquiry, closeEnquiry }}>
      {children}

      <Modal
        open={open}
        onClose={closeEnquiry}
        title="Enquire about admissions"
        subtitle="Fill in your details and our team will get back to you within one working day."
      >
        <EnquiryForm onSubmitted={handleFormSubmitSuccess} />
      </Modal>
    </EnquiryContext.Provider>
  );
}
