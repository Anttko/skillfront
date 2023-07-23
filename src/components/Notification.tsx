import { useBoundStore } from '../stores';
import { createStandaloneToast } from '@chakra-ui/toast';
import { useEffect } from 'react';
const { ToastContainer, toast } = createStandaloneToast();

const Notification = (): JSX.Element => {
  const { notification, notificationTime } = useBoundStore((state) => ({
    notification: state.notification,
    notificationTime: state.notificationTime,
  }));

  useEffect(() => {
    if (notification.message !== null) {
      toast({
        title: notification.message,
        status: notification.errorType,
        position: 'top',
        duration: notificationTime,
        isClosable: true,
      });
    }
  }, [notification, notificationTime]);

  return <ToastContainer />;
};
export default Notification;
