import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { BOOKING_WIDGET_URL } from "@/features/funnel/lib/constants";

interface QualificationContextValue {
  isOpen: boolean;
  triggerSection: string;
  openQualification: (section: string) => void;
  closeQualification: () => void;
}

const QualificationContext = createContext<QualificationContextValue | null>(null);

interface QualificationProviderProps {
  children: ReactNode;
  directBooking?: boolean;
}

export function QualificationProvider({ children, directBooking = false }: QualificationProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [triggerSection, setTriggerSection] = useState("");

  const openQualification = useCallback(
    (section: string) => {
      if (directBooking) {
        window.open(BOOKING_WIDGET_URL, "_blank", "noopener,noreferrer");
        return;
      }
      setTriggerSection(section);
      setIsOpen(true);
    },
    [directBooking],
  );

  const closeQualification = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <QualificationContext.Provider value={{ isOpen, triggerSection, openQualification, closeQualification }}>
      {children}
    </QualificationContext.Provider>
  );
}

export function useQualification() {
  return useContext(QualificationContext);
}
