import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import SectionTitle from '../SectionTitle';
import ChangePswrdForm from '../ChangePswrdForm';
import PersonalForm from '../PersonalForm';
import { hidePswrdBlock, showPswrdBlock } from '../../modules/Profile';
import { M } from '../../const';
import styles from './Profile.module.css';

class Profile extends PureComponent {
  componentWillUnmount() {
    const { pswrdBlockOpen, hidePswrdBlock } = this.props;

    if (pswrdBlockOpen) {
      hidePswrdBlock();
    }
  }

  render() {
    const { user, pswrdBlockOpen, showPswrdBlock, hidePswrdBlock } = this.props;

    return (
      <section className={styles.sectionContainer}>
        <div className={styles.titleBlock}>
          <SectionTitle children="Мой профиль" size="m" />
          <div className={styles.changePswrd}>
            <a
              href=" "
              className={styles.changePswrdLink}
              onClick={e => {
                e.preventDefault();
                showPswrdBlock();
              }}
              children="Изменить пароль"
            />
          </div>
        </div>
        <div className={styles.personalData}>
          <div className={styles.formDataBlock}>
            <PersonalForm user={user} startMode={M.read} />
          </div>
          <CSSTransition
            in={pswrdBlockOpen}
            timeout={300}
            mountOnEnter={true}
            unmountOnExit={true}
            classNames={{
              appear: styles.appear,
              enter: styles.enter,
              enterActive: styles.enterActive,
              exit: styles.exit,
              exitActive: styles.exitActive
            }}
          >
            <div className={styles.changePswrdBlock}>
              <ChangePswrdForm user={user} hidePswrdBlock={hidePswrdBlock} />
            </div>
          </CSSTransition>
        </div>
      </section>
    );
  }
}

export default connect(
  state => ({ pswrdBlockOpen: state.profile.pswrdBlockOpen }),
  { hidePswrdBlock, showPswrdBlock }
)(Profile);
