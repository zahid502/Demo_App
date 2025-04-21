import React, {createContext, ReactNode, useContext, useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';

interface GlobalOverlayContextType {
  showOverlay: (content: ReactNode) => void;
  hideOverlay: () => void;
}

interface IProps {
  children: React.ReactNode;
}

const GlobalOverlayContext = createContext<
  GlobalOverlayContextType | undefined
>(undefined);

export const useGlobalOverlay = () => {
  const context = useContext(GlobalOverlayContext);
  if (!context) {
    throw new Error(
      'useGlobalOverlay must be used within a GlobalOverlayProvider',
    );
  }
  return context;
};

export const GlobalOverlayProvider = ({children}: IProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [overlayContent, setOverlayContent] = useState<ReactNode | null>(null);

  const showOverlay = (content: ReactNode) => {
    setOverlayContent(content);
    setIsVisible(true);
  };

  const hideOverlay = () => {
    setIsVisible(false);
    setOverlayContent(null);
  };

  return (
    <GlobalOverlayContext.Provider value={{showOverlay, hideOverlay}}>
      {children}
      <Modal visible={isVisible} transparent animationType="fade">
        <View style={styles.overlay}>{overlayContent}</View>
      </Modal>
    </GlobalOverlayContext.Provider>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
