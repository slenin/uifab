import moment from 'moment';

class Time {
  static now = () => Math.floor(new Date().getTime() / 1000);

  static timestamp = (date) => Math.floor(date.getTime() / 1000);

  static date = (timestamp) => new Date(timestamp * 1000);

  static format = (timestamp, format) => moment(this.parseTimestamp(timestamp)).format(format || 'ddd, MMM DD LT');

  static ago = (timestamp) => {
    const now = Math.floor(new Date().getTime() / 1000);
    const diff = now - timestamp;
    if (diff < 60) {
      return `${diff}s`;
    }
    if (diff < 60 * 60) {
      return `${Math.floor(diff / 60)}m`;
    }
    if (diff < 60 * 60 * 24) {
      return `${Math.floor(diff / (60 * 60))}h`;
    }
    return `${Math.floor(diff / (60 * 60 * 24))}d`;
  }

  static calendar = (timestamp) => moment(this.parseTimestamp(timestamp)).calendar(null, {
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    nextWeek: 'dddd',
    lastDay: '[Yesterday]',
    lastWeek: '[Last] dddd',
    sameElse: 'MMM DD',
  });
}

export default Time;
