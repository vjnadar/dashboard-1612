import React from "react";
import { Avatar } from "@material-ui/core";
import { Facebook, Twitter, MailOutline } from "@material-ui/icons";
import Card from "./ProfileCard";
import elonMuskImgSrc from "../../assets/profileComponentImageFiles/elon-musk-bw.png";
import "./Profile.scss";

function Profile(): JSX.Element {
  return (
    <section className="Profile">
      <h3 className="Profile__title">Profile</h3>
      <div className="Profile__grid">
        <article className="Profile__grid-user-form">
          <Card heading="User details">
            <div className="Profile__grid-user-form-grid">
              <div className="Profile__grid-user-form-grid-account-info-company">
                <span className="Profile__grid-user-form-element">
                  <label htmlFor="Profile__grid-user-form-grid-account-info-company">Company Name (disabled)</label>
                  <input type="text" id="Profile__grid-user-form-grid-account-info-company" disabled placeholder="Tesla" />
                </span>
              </div>
              <div className="Profile__grid-user-form-grid-account-info-username">
                <span className="Profile__grid-user-form-element">
                  <label htmlFor="Profile__grid-user-form-grid-account-info-username">User Name</label>
                  <input type="text" id="Profile__grid-user-form-grid-account-info-username" />
                </span>
              </div>
              <div className="Profile__grid-user-form-grid-account-info-email-id">
                <span className="Profile__grid-user-form-element">
                  <label htmlFor="Profile__grid-user-form-grid-account-info-email-id">Email id</label>
                  <input type="text" id="Profile__grid-user-form-grid-account-info-email-id" />
                </span>
              </div>
              <div className="Profile__grid-user-form-grid-emp-name">
                <div className="Profile__grid-user-form-grid-emp-first-name">
                  <span className="Profile__grid-user-form-element">
                    <label htmlFor="Profile__grid-user-form-grid-emp-first-name">First Name</label>
                    <input type="text" id="Profile__grid-user-form-grid-emp-first-name" />
                  </span>
                </div>
                <div className="Profile__grid-user-form-grid-emp-last-name">
                  <span className="Profile__grid-user-form-element">
                    <label htmlFor="Profile__grid-user-form-grid-emp-last-name">Last Name</label>
                    <input type="text" id="Profile__grid-user-form-grid-emp-last-name" />
                  </span>
                </div>
              </div>
              <div className="Profile__grid-user-form-grid-emp-address">
                <span className="Profile__grid-user-form-element">
                  <label htmlFor="Profile__grid-user-form-grid-account-info-company">Address</label>
                  <input type="text" id="Profile__grid-user-form-grid-emp-address" />
                </span>
              </div>
              <div className="Profile__grid-user-form-grid-emp-city">
                <span className="Profile__grid-user-form-element">
                  <label htmlFor="Profile__grid-user-form-grid-emp-city">City</label>
                  <input type="text" id="Profile__grid-user-form-grid-emp-city" />
                </span>
              </div>
              <div className="Profile__grid-user-form-grid-emp-country">
                <span className="Profile__grid-user-form-element">
                  <label htmlFor="Profile__grid-user-form-grid-emp-country">Country</label>
                  <input type="text" id="Profile__grid-user-form-grid-emp-country" />
                </span>
              </div>
              <div className="Profile__grid-user-form-grid-emp-postal-code">
                <span className="Profile__grid-user-form-element">
                  <label htmlFor="Profile__grid-user-form-grid-emp-postal-code">Postal code</label>
                  <input type="text" id="Profile__grid-user-form-grid-emp-postal-code" />
                </span>
              </div>
              <div className="Profile__grid-user-form-grid-emp-about-me">
                <span className="Profile__grid-user-form-element">
                  <label htmlFor="Profile__grid-user-form-grid-emp-about-me">About me</label>
                  <textarea id="Profile__grid-user-form-grid-emp-about-me" defaultValue="A few lines about you..."></textarea>
                </span>
              </div>
              <button className="Profile__grid-user-form-grid-save">Save</button>
            </div>
          </Card>
        </article>
        <article className="Profile__grid-user-contact">
          <Card userContact>
            <div className="Profile__grid-user-contact-avatar">
              <Avatar src={elonMuskImgSrc} className="Profile__grid-user-contact-avatar-icon" />
            </div>
            <div className="Profile__grid-user-contact-details">
              <span className="Profile__grid-user-contact-details-name">Elon Musk</span>
              <span className="Profile__grid-user-contact-details-designation">CEO</span>
            </div>
            <div className="Profile__grid-user-contact-description">
              <span>
                Elon Reeve Musk FRS (/ˈiːlɒn/ EE-lon; born June 28, 1971) is an entrepreneur and business magnate. A centibillionaire, Musk is one of the
                richest people in the world.
              </span>
            </div>
            <div className="Profile__grid-user-contact-share-buttons">
              <button aria-label="Facebook">
                <Facebook className="Profile__grid-user-contact-share-buttons-icon" />
              </button>
              <button aria-label="Twitter">
                <Twitter className="Profile__grid-user-contact-share-buttons-icon" />
              </button>
              <button aria-label="Mail">
                <MailOutline className="Profile__grid-user-contact-share-buttons-icon" />
              </button>
            </div>
          </Card>
        </article>
      </div>
    </section>
  );
}

export default Profile;
