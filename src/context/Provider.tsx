
import { useCallback, useState } from "react";
import {AlertContext} from './AlertContext';


interface Props {
  children: JSX.Element | JSX.Element[];
}

export function AlertContextProvider({ children }: Props) {

    
  const [alerts, setAlerts] = useState<any[]>([]);

  const addAlert = useCallback(function addAlert(message: any) {
    setAlerts(function (currentAlerts) {
      return [...currentAlerts, message];
    });

    // console.log(message)
    setTimeout(
      () =>
        setAlerts(function (currentAlerts) {
          return currentAlerts.slice(1);
        }),
      3000
    );
  }, []);

  return (
    <AlertContext.Provider value={addAlert}>
      {children}

      <div className="myWrapper">
        {alerts.map((alert: any) => (
          <div className="alerta alert " key={alert}>
            {" "}
            {alert}
          </div>
        ))}
      </div>
    </AlertContext.Provider>
  );
}
