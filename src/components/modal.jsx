import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useEffect } from "react";
import useNotificationStore from "./notificationStore";

const NotificationModal = () => {
  const { notifications, clearNotifications } = useNotificationStore();
  const { isOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (notifications.length > 0) {
      onOpenChange(true);
    }
  }, [notifications]);

  const handleClose = () => {
    clearNotifications();
    onOpenChange(false);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {notifications.map((notif) => (
          <div key={notif.id}>
            <ModalHeader>{notif.type === 'info' ? 'Information' : 'Alert'}</ModalHeader>
            <ModalBody>
              {notif.content} {/* Custom content */}
            </ModalBody>
            <ModalFooter>
              <Button onPress={handleClose}>Close</Button>
            </ModalFooter>
          </div>
        ))}
      </ModalContent>
    </Modal>
  );
};

export default NotificationModal;
