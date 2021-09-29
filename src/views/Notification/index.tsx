import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "../../components/UI";
import Card from "./NotificationCard";
import settingImageSrc from "../../assets/alertImageFiles/setting.svg";
import "./Notification.scss";

function Notification(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [vertical, setVertical] = useState<"top" | "bottom">("top");
  const [horizontal, setHorizontal] = useState<"left" | "center" | "right">("left");
  const handleClick = (verticalVal: "top" | "bottom", horizontalVal: "left" | "center" | "right") => () => {
    setOpen(true);
    setVertical(verticalVal);
    setHorizontal(horizontalVal);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <section className="Notification">
        <h3 className="Notification__title">Alerts</h3>
        <div className="Notification__grid">
          <article className="Notification__notification1">
            <Card heading="Notification features" headingAlignment="left">
              <Alert>This is a normal notifification without the close button</Alert>
              <Alert closeButton color="success">
                This is a normal notification with a close button
              </Alert>
              <Alert closeButton color="info" iconSrc={settingImageSrc}>
                This is a normal notification with a close button and an icon
              </Alert>
              <Alert closeButton color="warning" iconSrc={settingImageSrc}>
                <b>
                  <i>
                    This is a notification message with a close button and an icon. It also contains a lot of text to test the word wrap feature. The para
                    starts here:&nbsp;
                  </i>
                </b>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum".
              </Alert>
            </Card>
          </article>
          <article className="Notification__notification2">
            <Card heading="Notification types" headingAlignment="left">
              <Alert>This is the default notification(in this case, the color-prop is not set)!</Alert>
              <Alert color="error">This is a error notification(in this case, the color-prop is to error)!</Alert>
              <Alert color="warning">This is a warning notification(in this case, the color-prop is to warning)!</Alert>
              <Alert color="info">This is a informational notification(in this case, the color-prop is to info)!</Alert>
              <Alert color="success">This is a success notification(in this case, the color-prop is to success)!</Alert>
              <Alert color="dark">This is a notification using a dark background color(in this case, the color-prop is to success)!</Alert>
            </Card>
          </article>
          <article className="Notification__positioned-snackbar">
            <Card
              heading="Notifications as per screen location"
              subHeading="Click on one of the buttons below to display the snack bar at one of the specified screen locations."
            >
              <div className="Notification__positioned-snackbar-content-grid">
                <button className="Notification__positioned-snackbar-content-top-left-button" onClick={handleClick("top", "left")}>
                  Top left
                </button>
                <button className="Notification__positioned-snackbar-content-top-right-button" onClick={handleClick("top", "right")}>
                  Top right
                </button>
                <button className="Notification__positioned-snackbar-content-top-center-button" onClick={handleClick("top", "center")}>
                  Top center
                </button>
                <button className="Notification__positioned-snackbar-content-bottom-left-button" onClick={handleClick("bottom", "left")}>
                  Bottom left
                </button>
                <button className="Notification__positioned-snackbar-content-bottom-right-button" onClick={handleClick("bottom", "right")}>
                  Bottom right
                </button>
                <button className="Notification__positioned-snackbar-content-bottom-center-button" onClick={handleClick("bottom", "center")}>
                  Bottom center
                </button>
              </div>
            </Card>
          </article>
        </div>
      </section>
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} onClose={handleClose} message="I love React JS!" key={vertical + horizontal} />
    </>
  );
}

export default Notification;
