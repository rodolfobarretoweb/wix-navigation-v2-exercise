import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-BR');

export const momentsAgo = date => moment(date).fromNow(true);