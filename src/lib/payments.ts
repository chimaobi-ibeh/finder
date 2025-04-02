import PaystackPop from '@paystack/inline-js';

export const initializeEscrow = async (
  email: string,
  amount: number,
  subaccount: string
) => {
  const paystack = new PaystackPop();
  return new Promise<string>((resolve, reject) => {
    paystack.newTransaction({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email,
      amount: amount * 100, // Convert to kobo
      subaccount,
      callback: (response: any) => resolve(response.reference),
      onClose: () => reject(new Error('Transaction cancelled')),
    });
  });
};