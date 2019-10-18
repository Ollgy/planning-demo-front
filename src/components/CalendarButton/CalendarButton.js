import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import icon from './assets/calendar.svg';
import Calendar from 'react-calendar';
import { F } from '../../const';
import formattedDate from './utils/formattedDate';
import styles from './CalendarButton.module.css';

class CalendarButton extends PureComponent {
  toggle = () => {
    const { isOpen, activities } = this.props;

    isOpen ? activities.closeDialog() : activities.openDialog();
  };

  setInputValue = d => {
    const { setDate } = this.props.activities;

    setDate(
      formattedDate({
        day: d.getDate(),
        month: d.getMonth() + 1,
        year: d.getFullYear()
      }),
      F.birthDate
    );
  };

  render() {
    const { isOpen } = this.props;

    return (
      <div className={styles.calendarBtnContainer}>
        <div className={styles.calendarButton} onClick={this.toggle}>
          <img className={styles.calendarIcon} src={icon} alt="icon" />
        </div>
        <CSSTransition
          in={isOpen}
          timeout={300}
          appear
          unmountOnExit={true}
          classNames={{
            appear: styles.appear,
            enter: styles.enter,
            enterActive: styles.enterActive,
            exit: styles.exit,
            exitActive: styles.exitActive
          }}
        >
          <div className={styles.calendarContainer}>
            <div className={styles.calendarBlock}>
              <Calendar value={new Date()} onChange={this.setInputValue} />
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default CalendarButton;
