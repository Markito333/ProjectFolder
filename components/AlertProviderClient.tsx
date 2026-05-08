'use client';
import { AlertProvider } from './AlertContext';

export default function AlertProviderClient({ children }: { children: React.ReactNode }) {
  return <AlertProvider>{children}</AlertProvider>;
}
