import { Button, Modal } from '@/components';
import { useCreation } from 'ahooks';
import * as React from 'react';

export interface PopupLayerProps<
  T extends React.ComponentType<any> = React.ComponentType<any>,
  P extends React.ComponentType<any> = React.ComponentType<any>,
> {
  trigger?: T;
  triggerProps?: React.ComponentProps<T>;
  popup?: P;
  popupProps?: React.ComponentProps<P>;
  renderTrigger?: () => React.ReactElement<any, any> | null;
}

export const PopupLayer: React.FC<PopupLayerProps> = ({
  trigger: TriggerComponent,
  triggerProps,
  popup: PopupComponent,
  renderTrigger,
}) => {
  const trigger = useCreation(
    () =>
      renderTrigger
        ? React.cloneElement(renderTrigger()!, {
            onClick: () => {},
          })
        : React.createElement(TriggerComponent!, triggerProps),
    [renderTrigger],
  );

  if (!TriggerComponent || !PopupComponent) {
    return null;
  }

  return (
    <>
      {trigger}
      <PopupComponent></PopupComponent>
    </>
  );
};

PopupLayer.defaultProps = {
  trigger: Button,
  popup: Modal,
};
